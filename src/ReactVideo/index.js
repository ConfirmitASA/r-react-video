//@flow
import type {State,Props} from './types'

import React, {Component} from "react";
import ImageGrid from "../ImageGrid";
import SingleView from "../SingleView";
import DSAbstraction from '../DSAbstraction'
import Navigation from './Navigation'
import SingleViewResponses from '../SingleView/Responses'
export default class ReactVideo extends Component<Props, State> {
  DS = DSAbstraction({
    config: this.props.config,
    thumbsPlaceholder: this.props.thumbsPlaceholder,
    component: this
  });

  state = {
    items: null,
    error: false,
    config: null,
    mode: 'view',
    singleView: {
      link: ''
    },
    singleViewVisible: false,
    singleViewDisablePrev: false,
    singleViewDisableNext: false,
  };

  translate = this.DS.i18n.bind(this.DS);

  render() {
    const { items, singleViewVisible, error} = this.state;
    let render = null;
    if (!error && Array.isArray(items) && items.length !== 0) {
      render = (
        <div className={`GridContainer ${!singleViewVisible ? 'GridView' : ''}`}>
          { this.renderSingleView() }
          <div className="ImageGridContainer" style={{ display: !singleViewVisible ? 'block' : 'none' }}>
            <ImageGrid
              aspect="16:9"
              onSelect={this.onSelect}
              items={items}
            />
            {this.renderNavigation()}
          </div>
        </div>
      )
    } else {
      if (this.DS) {
        render = (
          <div className="GridContainer ImageGrid">{this.dataLoadingMessage()}</div>
        )
      } else {
        throw new Error('HitlistDatasource is not available')
      }
    }
    return render
  }

  renderNavigation(){
    const { loadPreviousPage, loadNextPage, loadMore, disableNextButton, disablePrevButton, getPageInfo } = this.DS;
    const navigationProps = {
      loadPreviousPage,
      loadNextPage,
      loadMore,
      disableNextButton,
      disablePrevButton,
      pageInfo: getPageInfo(),
      config: this.state.config,
      translate: this.translate
    }

    return <Navigation {...navigationProps} />
  }

  renderSingleView(){
    const {singleViewVisible, singleView, singleViewDisablePrev, singleViewDisableNext, mode } = this.state;
    return singleViewVisible ? (
      <SingleView
        returnToGridAction={this.returnToGrid}
        loadPreviousItem={this.loadPreviousItem}
        loadNextItem={this.loadNextItem}
        headerText={`Edit video "${singleView.title}"`}
        singleViewDisablePrev={singleViewDisablePrev}
        singleViewDisableNext={singleViewDisableNext}
      >
        {mode==='edit' ? <iframe className="renderArea" src={singleView.link} /> : <SingleViewResponses data={singleView}/>}
      </SingleView>
    ) : null
  }

  dataLoadingMessage() {
    let message;
    const { items, error } = this.state;
    if (error) {
      message = 'errorLoading'
    } else if (Array.isArray(items) && items.length === 0) {
      message = 'REPORT_SINGLEVIEW_NOTHINGFOUND'
    } else {
      message = 'loadingData'
    }
    return this.DS.i18n(message)
  }

  returnToGrid = () => {
    this.setState({
      singleViewVisible: false,
      singleView: {
        link: ''
      }
    });

  }

  loadPreviousItem = () => {
    return this.navigateItems('back')
  }

  loadNextItem = () => {
    return this.navigateItems('forward')
  }

  navigateItems(direction:'forward'|'backward') {
    let items = this.state.items;
    const paginationType = this.state.config.pagination;
    let itemsLength = items.length - 1;
    const currentSingleViewItemIndex = items.indexOf(this.state.singleView);
    const nextIndex = direction === 'forward' ? currentSingleViewItemIndex+1 : currentSingleViewItemIndex-1;

    const loadItemFromPreviousPage = nextIndex < 0 && !this.DS.disablePrevButton;
    const loadItemFromNextPage = nextIndex > itemsLength && !this.DS.disableNextButton;

    // assign items to thenable promises if requested item is outside of data boundaries
    if (loadItemFromPreviousPage) {
      items = this.DS.loadPreviousPage();
    } else if (loadItemFromNextPage) {
      items = paginationType !== 'continuous' ? this.DS.loadNextPage() : this.DS.loadMore();
    }
    const itemsArePromised = items.hasOwnProperty('then')
    if (!itemsArePromised) {
      items = Promise.resolve(items);
    }

    const [disableSingleViewPrev, disableSingleViewNext] = this.checkSingleViewNavState(nextIndex);
    items.then(() => {
      let singleViewData;
      this.setState(prevState => {
        const newItems = prevState.items;
        const atDataLeftBoundaryCanLoad = nextIndex < 0 && !disableSingleViewPrev;
        const atDataRightBoundaryCanLoad = nextIndex > itemsLength && !disableSingleViewNext && paginationType !== 'continuous';
        if (atDataLeftBoundaryCanLoad) {
          singleViewData = newItems[newItems.length - 1]
        } else if (atDataRightBoundaryCanLoad) {
          singleViewData = newItems[0]
        } else {
          singleViewData = newItems[nextIndex]
        }

        return {
          disableSingleViewNext,
          disableSingleViewPrev,
          singleView: singleViewData,
          singleViewVisible: true
        }
      });
    });
  }

  toggleSingleViewNavState(item) { }

  onSelect = (item) => {
    const [disableSingleViewPrev, disableSingleViewNext] = this.checkSingleViewNavState(this.state.items.indexOf(item));
    this.setState({
      disableSingleViewPrev,
      disableSingleViewNext,
      singleView: item,
      singleViewVisible: true
    })
  };

  checkSingleViewNavState(currentItemIndex) {
    const items = this.state.items;
    let disableSingleViewNext = false,
      disableSingleViewPrev = false;

    if (currentItemIndex <= 0 && this.DS.disablePrevButton) {
      disableSingleViewPrev = true;
    }
    if (currentItemIndex >= items.length - 1 && this.DS.disableNextButton) {
      disableSingleViewNext = true;
    }
    return [
      disableSingleViewPrev,
      disableSingleViewNext
    ]
  }


  static actionIcon() {
    return (
      <svg className="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    )
  }
}


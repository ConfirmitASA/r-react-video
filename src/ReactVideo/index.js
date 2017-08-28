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
    singleViewMode: 'view',
    singleView: {
      link: ''
    },
    singleViewVisible: false,
    singleViewDisablePrev: false,
    singleViewDisableNext: false,
  };

  translate = this.DS.i18n.bind(this.DS);

  render() {
    const { items, singleViewVisible, error, config} = this.state;
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
              actionIcon={config.canEdit?this.actionIcon:null}
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
    const {singleViewVisible, singleView, singleViewDisablePrev, singleViewDisableNext, singleViewMode } = this.state;
    return singleViewVisible ? (
      <SingleView
        returnToGridAction={this.returnToGrid}
        loadPreviousItem={this.loadPreviousItem}
        loadNextItem={this.loadNextItem}
        headerText={`Edit video "${singleView.title}"`}
        singleViewDisablePrev={singleViewDisablePrev}
        singleViewDisableNext={singleViewDisableNext}
      >
        {singleViewMode==='edit' ? <iframe className="renderArea" src={singleView.link} /> : <SingleViewResponses data={singleView}/>}
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

  navigateItems(direction:'forward'|'backward'):void {
    let items = this.state.items;
    const paginationType = this.state.config.pagination;
    let itemsLength = items.length - 1;
    const currentSingleViewItemIndex = items.indexOf(this.state.singleView);
    const nextIndex = direction === 'forward' ? currentSingleViewItemIndex+1 : currentSingleViewItemIndex-1;

    const loadItemFromPreviousPage = nextIndex < 0 && !this.DS.disablePrevButton;
    const loadItemFromNextPage = nextIndex > itemsLength && !this.DS.disableNextButton;

    let promisedItems = Promise.resolve(items);
    // assign items to thenable promises if requested item is outside of data boundaries
    if (loadItemFromPreviousPage) {
      promisedItems = this.DS.loadPreviousPage();
    } else if (loadItemFromNextPage) {
      promisedItems = paginationType !== 'continuous' ? this.DS.loadNextPage() : this.DS.loadMore();
    }
/*     const itemsArePromised = !Array.isArray(items) && items.hasOwnProperty('then');
    if (!itemsArePromised) {
      promisedItems = Promise.resolve(items);
    }
 */
    promisedItems.then(() => {
      let singleViewData;
      this.setState(prevState => {
        const newItems = prevState.items;
        const atDataLeftBoundaryCanLoad = nextIndex < 0 && !singleViewDisablePrev;
        const atDataRightBoundaryCanLoad = nextIndex > itemsLength && !singleViewDisableNext && paginationType !== 'continuous';
        if (atDataLeftBoundaryCanLoad) {
          singleViewData = newItems[newItems.length - 1]
        } else if (atDataRightBoundaryCanLoad) {
          singleViewData = newItems[0]
        } else {
          singleViewData = newItems[nextIndex]
        }

        return {
          ...this.getSingleViewNavState(nextIndex),
          singleView: singleViewData,
          singleViewVisible: true
        }
      });
    });
  }

  toggleSingleViewNavState(item) { }

  onSelect = (item) => {
    this.setState({
      ...this.getSingleViewNavState(this.state.items.indexOf(item)),
      singleView: item,
      singleViewVisible: true,
      singleViewMode:'view'
    })
  };

  getSingleViewNavState(currentItemIndex:number) {
    const items = this.state.items;
    let singleViewDisableNext = false,
    singleViewDisablePrev = false;

    if (currentItemIndex <= 0 && this.DS.disablePrevButton) {
      singleViewDisablePrev = true;
    }
    if (currentItemIndex >= items.length - 1 && this.DS.disableNextButton) {
      singleViewDisableNext = true;
    }
    return {
      singleViewDisablePrev,
      singleViewDisableNext
    }
  }

  actionIconClick = (item) => ()=>this.setState({
    ...this.getSingleViewNavState(this.state.items.indexOf(item)),
    singleView: item,
    singleViewVisible: true,
    singleViewMode:'edit'
  })
  actionIcon=(item)=>{
    return (
      <svg className="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" onClick={this.actionIconClick(item)}>
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    )
  }
}


/**
 * Created by IvanP on 11.01.2017.
 */
import React from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';
import HitlistDS from "r-hitlist-datasource";
import SingleView from "../SingleView/SingleView";
import unionBy from 'lodash/unionBy';

class ReactVideo extends React.Component {
  /**
   * @param {Object} props
   * @param {String} props.config - name of the config that maps question ids from data with the data types
   * @param {Boolean} props.thumbsPlaceholder - display thumbs as image placeholders instead of media icons
   *
   * */
  constructor(props) {
    super(props);
    this.DS = new HitlistDS();
    this.props.verbose && console.log(this.DS);
    this.setupDataListener();
    this.state = {
      items: null,
      error: false,
      singleView: {
        link: ''
      },
      singleViewVisible: false,
      disableSingleViewPrev: false,
      disableSingleViewNext: false,
    };
  }

  render() {
    const {items, singleViewVisible, singleView, error, disableSingleViewPrev, disableSingleViewNext} = this.state;
    let render = null;
    if (!error && Array.isArray(items) && items.length !== 0) {
      render = (
        <div className={`GridContainer ${!singleViewVisible ? 'GridView' : ''}`}>
          <SingleView
            link={singleView.link}
            visible={singleViewVisible}
            initialLoad={true}
            returnToGridAction={this.returnToGrid}
            loadPreviousItem={this.loadPreviousItem}
            loadNextItem={this.loadNextItem}
            headerText={`Edit video "${singleView.title}"`}
            disableSingleViewPrev={disableSingleViewPrev}
            disableSingleViewNext={disableSingleViewNext}
          />
          <div className="ImageGridContainer" style={{display: !singleViewVisible ? 'block' : 'none'}}>
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

  dataLoadingMessage() {
    let message;
    const {items, error} = this.state;
    if (error) {
      message = 'errorLoading'
    } else if (Array.isArray(items) && items.length === 0) {
      message = 'REPORT_SINGLEVIEW_NOTHINGFOUND'
    } else {
      message = 'loadingData'
    }
    return this.DS.i18n(message)
  }

  renderNavigation() {
    if (this.config) {
      const pagination = this.config.pagination;
      if (pagination === 'continuous') {
        return this.continuousNavigation();
      } else {
        return this.pagingNavigation();
      }
    } else {
      return null
    }
  }

  pagingNavigation() {
    let pageInfo = '';
    if (this.DS.pageInfo && this.DS.sortingPagingValues && this.DS.sortingPagingValues.totalHits) {
      pageInfo = `${this.DS.pageInfo} of ${this.DS.sortingPagingValues.totalHits}`
    }
    return (
      <div className="buttonRow">
        <span rel="button"
              className="materialButton accent"
              onClick={this.loadPreviousPage}
              disabled={this.DS.disablePrevButton}
        >
           {this.DS.i18n('REPORT_SINGLEVIEW_PREVIOUS')}
        </span>
        <span rel="button"
              className="materialButton accent"
              onClick={this.loadNextPage}
              disabled={this.DS.disableNextButton}
        >
          {this.DS.i18n('REPORT_SINGLEVIEW_NEXT')}
        </span>
        <span>{pageInfo}</span>
      </div>
    )
  }

  continuousNavigation() {
    return (
      <div className="buttonRow" style={{textAlign: 'center'}}>
              <span rel="button"
                    className="materialButton flat"
                    onClick={this.loadMore}
                    disabled={this.DS.disableNextButton}
              >Load more</span>
      </div>
    )
  }


  /**
   * Launches listener for `Y.Global.reportcontroller:viewModeDataUpdate` event within YUI which is triggered every time the filter panel updates or on initial load
   * */
  setupDataListener() {
    if (Y && Y.Global) {
      Y.Global.on("reportcontroller:viewModeDataUpdate", filterInfo => {
        this.initialiseConfig(this.props.config);
        if (this.DS && this.config) {
          this.DS.modifier = filterInfo; // filter information as a modifier for data fetch
          this.DS.initialDataLoad().then(response => this.processData(response)).catch(this.handleDataLoadingError)
        }
      })
    } else {
      throw new Error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
    }
  }

  handleDataLoadingError = () => {
    this.setState({
      error: true,
      items: []
    })
  };

  returnToGrid = () => {
    this.setState({
      singleViewVisible: false,
      singleView: {
        link: ''
      }
    });
    this.DS.initialDataLoad().then(response => this.processData(response)).catch(this.handleDataLoadingError);
  }

  loadPreviousItem = () => {
    return this.navigateItems('back')
  }

  loadNextItem = () => {
    return this.navigateItems('forward')
  }

  navigateItems(direction) {
    let items = this.state.items;
    let itemsLength = items.length - 1;
    const prevData = this.state.singleView;
    let prevIndex = items.indexOf(prevData);
    let nextIndex = direction === 'forward' ? ++prevIndex : --prevIndex;

    if (nextIndex < 0 && !this.DS.disablePrevButton) {
      items = this.loadPreviousPage();
    } else if (nextIndex > itemsLength && !this.DS.disableNextButton) {
      items = this.loadNextPage()
    }

    if (!items.hasOwnProperty('then')) {
      items = Promise.resolve(items);
    }
    const [disableSingleViewPrev,disableSingleViewNext]= this.checkSingleViewNavState(nextIndex);
    items.then(() => {
      let singleView;
      this.setState(prevState=>{
        const newItems = prevState.items;
        if (nextIndex < 0 && !disableSingleViewPrev) {
          singleView = newItems[newItems.length - 1]
        } else if (nextIndex > itemsLength && !disableSingleViewNext) {
          singleView = newItems[0]
        } else {
          singleView = newItems[nextIndex]
        }
        return {
          disableSingleViewNext,
          disableSingleViewPrev,
          singleView: singleView,
          singleViewVisible: true
        }
      });
    });
  }

  toggleSingleViewNavState(item) {
  }

  loadNextPage = () => {
    return this.DS.nextPage().then(response => this.processData(response)).catch(this.handleDataLoadingError);
  };
  loadPreviousPage = () => {
    return this.DS.previousPage().then(response => this.processData(response)).catch(this.handleDataLoadingError);
  };
  loadMore = () => {
    this.DS.nextPage().then(response => this.processData(response, 'append')).catch(this.handleDataLoadingError);
  };

  onSelect = (item) => {
      const [disableSingleViewPrev,disableSingleViewNext]= this.checkSingleViewNavState(this.state.items.indexOf(item));
        this.setState({
      disableSingleViewPrev,
      disableSingleViewNext,
      singleView: item,
      singleViewVisible: true
    })
  };

  checkSingleViewNavState(currentItemIndex){
    const items = this.state.items;
    let disableSingleViewNext = false,
      disableSingleViewPrev = false;

    if (currentItemIndex <= 0 && this.DS.disablePrevButton) {
      disableSingleViewPrev = true;
    }
    if (currentItemIndex >= items.length-1 && this.DS.disableNextButton) {
      disableSingleViewNext = true;
    }
    return [
      disableSingleViewPrev,
      disableSingleViewNext
    ]
  }


  initialiseConfig(configName) {
    if (!this.config) {
      if (!window[configName]) {
        throw new Error('config is not passed from backed')
      }
      this.config = window[configName];
    }
  }

  processData(data, mode = 'replace') {
    let c = this.config,
      config = {};
    ['id', 'title', 'description', 'image', 'audio', 'video', 'tags'].forEach(item => config[item] = [this.config[item]]);
    config = {
      id: c.id,
      title: c.title,
      description: c.description,
      image: c.image,
      audio: c.audio,
      video: c.video,
      tags: c.tags,
    };
    let newData = data.map((item, index) => {
      let parsedData = {};
      for (let key in config) {
        parsedData[key] = this.prepareData(item[config[key]], key);
        // if image - we might want to use a placeholder as the thumb, and load the full image in background
        if (key == 'image') {
          if (this.props.thumbsPlaceholder) {
            parsedData['placeholder'] = parsedData.image;
          }
          parsedData.image = parsedData.image.replace(/_thumb/gi, '');
        }
        // calculate mediatype or a placeholder icon
        if (['video', 'audio', 'image'].indexOf(key) > -1 && config[key]) {
          parsedData.mediatype = key
        }
      }
      // get id for keys
      parsedData.id = item.responseid ? item.responseid : index;
      // calculate link passed as `slink` property in data
      if (item.slink) {
        let l = item.slink;
        parsedData.link = (/href='(.+?)'/gi).exec(l)[1];
      }
      return parsedData;
    });

    //update state with the new set of data or a merged data
    if (mode === 'replace') {
      this.setState({
        items: newData,
        error: false
      });
    } else if (mode === 'append') {
      this.setState(prevState => ({
        items: [...prevState.items, ...newData],
        error: false
      }));
    } else if (mode === 'merge') {
      console.log(mode);
      this.setState(prevState => ({
        items: unionBy(newData, prevState.items, 'id'),
        error: false
      }))
    } else {
      console.log('хрен знает что')
    }
  }

  /**
   * massage data to fit the type we expect to receive in react view
   * */
  prepareData(data, type) {
    switch (type) {
      case 'image':
        let result = (/src='(.+?)'/gi).exec(data);
        return result && result != null && result[1] ? result[1] : undefined;
        break;
      case 'description':
      case 'title':
        return !(data.indexOf('-') > -1 && data.trim().length == 1) ? data.trim() : undefined;
        break;
      case 'tags':
        return data && (data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length == 1 ? undefined : data.trim());
        break;
    }
  }


  static actionIcon() {
    return <svg className="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  }
}

export default ReactVideo;

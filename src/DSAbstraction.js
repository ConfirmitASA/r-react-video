//@flow
import HitlistDS from "r-hitlist-datasource";
import unionBy from "lodash/unionBy";
import ReportalBase from 'r-reportal-base';

type Options = {
  /**
   * name of a global config variable passed
   */
  config: string,

  /**
   * display thumbs as image placeholders instead of media icons
   */
  thumbsPlaceholder: boolean,
  component: any
}

type parsedDataRow = {
  id: string | number,
  title?: string,
  description?: string,
  placeholder?: string,
  image?: string,
  mediatype: 'video' | 'audio' | 'image',
  link: string,
  [x: string]: string,
}


export default function DSAbstraction(options: Options) {
  const DS = new HitlistDS();
  const component = options.component;
  let config;
  const query = ReportalBase.locationDeserialize().query;

  setupDataListener(options.config);

  /**
   * Launches listener for `Y.Global.reportcontroller:viewModeDataUpdate` event within YUI which is triggered every time the filter panel updates or on initial load
   * */
  function setupDataListener(configName) {
    if (Y && Y.Global) {
      Y.Global.on("reportcontroller:viewModeDataUpdate", filterInfo => {
        initialiseConfig(configName);
        if (DS && config) {
          DS.modifier = filterInfo; // filter information as a modifier for data fetch
          DS.initialDataLoad()
            .then(processData)
            .catch(handleDataLoadingError)
        }
      })
    } else {
      throw new Error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
    }
  }

  function initialiseConfig(configName) {
    if (!config) {
      if (!window[configName]) {
        throw new Error('config is not passed from backend')
      }
      config = window[configName];
      if (config.individualRecords && typeof config.individualRecords === 'string') {
        config.individualRecords = config.individualRecords.split(',').map(item => item.trim());
      }
      component.setState({config})
    }
  }

  function processData(data, mode = 'replace') {
    const newData: parsedDataRow[] = data.map((dataRow, rowIndex) => {
      let parsedRow: parsedDataRow = {};
      const ir = config.individualRecords || [];
      const dataFields = ['id', 'title', 'description', 'video', 'audio', 'image'].concat(ir);
      dataFields.forEach(key => {
        const columnID = config[key];
        parsedRow[key] = prepareData(dataRow[columnID || key], key);
        // if image - we might want to use a placeholder as the thumb, and load the full image in background
        if (key === 'image') {
          if (parsedRow.image) {
            if (options.thumbsPlaceholder) {
              parsedRow.placeholder = parsedRow.image;
            }
            parsedRow.image = parsedRow.image.replace(/_thumb/gi, '');
          }
        }
        // calculate mediatype or a placeholder icon
        if (!parsedRow.mediatype && ['video', 'audio', 'image'].indexOf(key) > -1 && config[key] && parsedRow[key]) {
          parsedRow.mediatype = key
        }
      });

      // get id for keys
      parsedRow.id = dataRow.responseid ? dataRow.responseid : rowIndex;
      // calculate link passed as `slink` property in data
      if (dataRow.slink) {
        let l = dataRow.slink;
        parsedRow.link = (/href='(.+?)'/gi).exec(l).pop();
      }
      return parsedRow;
    });

    //update state with the new set of data or a merged data
    if (mode === 'replace') {
      component.setState({
        items: newData,
        loading: false,
        error: false
      });
    } else if (mode === 'append') {
      component.setState(prevState => ({
        items: [...prevState.items, ...newData],
        loading: false,
        error: false
      }));
    } else if (mode === 'merge') {
      console.log(mode);
      component.setState(prevState => ({
        items: [...unionBy(newData, prevState.items, 'id')],
        loading: false,
        error: false
      }))
    } else {
      console.log('хрен знает что')
    }
  }

  /**
   * massage data to fit the type we expect to receive in react view
   * */
  function prepareData(data: any, type: string) {
    //console.log('prepareData', data, type)
    switch (type) {
      case 'image':
        let result = (/src='(.+?)'/gi).exec(data);
        return result != null && result[1] ? result[1] : undefined;
      case 'description':
      case 'title':
        return !(data.indexOf('-') > -1 && data.trim().length === 1) ? data.trim() : undefined;
      case 'video':
      case 'audio':
        return !(data.indexOf('-') > -1 && data.trim().length === 1) ? generateMediaLink(data.trim(), type) : undefined;
      case 'tags':
        return data && (data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length === 1 ? undefined : data.trim());
      default:
        return data;
    }
  }

  function generateMediaLink(fileName: string, type: 'audio' | 'video') {
    //console.log('generateMediaLink', fileName, type);
    const dsName = config.surveyID;
    return `/reportal/Wysiwyg/Report/${query.reportid}/${dsName}/${type}/${fileName}`
  }

  function handleDataLoadingError(err) {
    console.log(err);
    component.setState({
      error: true,
      items: []
    })
  }

  DS.loadNextPage = () => {
    component.setState({loading: true});
    return DS.nextPage()
      .then(processData)
      .catch(handleDataLoadingError);
  };

  DS.loadPreviousPage = () => {
    component.setState({loading: true});
    return DS.previousPage()
      .then(processData)
      .catch(handleDataLoadingError);
  };

  DS.loadMore = () => {
    component.setState({loading: true});
    return DS.nextPage()
      .then(response => processData(response, 'append'))
      .catch(handleDataLoadingError);
  };

  DS.initialLoad = () => {
    component.setState({loading: true});
    return DS.initialDataLoad()
      .then(processData)
      .catch(handleDataLoadingError);
  };

  DS.getPageInfo = () => {
    const hasPageInfo = DS.pageInfo && DS.sortingPagingValues && DS.sortingPagingValues.totalHits;
    return hasPageInfo ? `${DS.pageInfo} of ${DS.sortingPagingValues.totalHits}` : '';
  };

  DS.config = () => {
    return config != null ? config : initialiseConfig(options.config)
  };

  return DS
}

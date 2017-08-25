//@flow
import HitlistDS from "r-hitlist-datasource";
import unionBy from "lodash/unionBy";

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


export default function DSAbstraction(options: Options) {
    const DS = new HitlistDS();
    const component = options.component;
    let config;

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
        }
    }

    function processData(data, mode = 'replace') {
        const newData = data.map((dataRow, rowIndex) => {
            let parsedRow = {};
            ['id', 'title', 'description', 'image', 'audio', 'video', 'tags'].forEach(key => {
                const columnID = config[key];
                parsedRow[key] = prepareData(dataRow[columnID], key);
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
                if (['video', 'audio', 'image'].indexOf(key) > -1 && config[key] && parsedRow[key]) {
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
                error: false
            });
        } else if (mode === 'append') {
            component.setState(prevState => ({
                items: [...prevState.items, ...newData],
                error: false
            }));
        } else if (mode === 'merge') {
            console.log(mode);
            component.setState(prevState => ({
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
    function prepareData(data, type: string) {
        switch (type) {
            case 'image':
                let result = (/src='(.+?)'/gi).exec(data);
                return result && result !== null && result[1] ? result[1] : undefined;
            case 'description':
            case 'title':
            case 'video':
            case 'audio':
                return !(data.indexOf('-') > -1 && data.trim().length === 1) ? data.trim() : undefined;
            case 'tags':
                return data && (data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length === 1 ? undefined : data.trim());
        }
    }

    function handleDataLoadingError(err) {
        console.log(err);
        component.setState({
            error: true,
            items: []
        })
    };

    DS.loadNextPage = () => {
        DS.nextPage()
            .then(processData)
            .catch(handleDataLoadingError);
    };

    DS.loadPreviousPage = () => {
        DS.previousPage()
            .then(processData)
            .catch(handleDataLoadingError);
    };

    DS.loadMore = () => {
        DS.nextPage()
            .then(response => processData(response, 'append'))
            .catch(handleDataLoadingError);
    };

    DS.initialLoad = () => {
        DS.initialDataLoad()
            .then(processData)
            .catch(handleDataLoadingError);
    };

    DS.getPageInfo = () => {
        const hasPageInfo = DS.pageInfo && DS.sortingPagingValues && DS.sortingPagingValues.totalHits;
         return hasPageInfo? `${DS.pageInfo} of ${DS.sortingPagingValues.totalHits}` : '';
    };

    DS.config = () => config;

    return DS
}
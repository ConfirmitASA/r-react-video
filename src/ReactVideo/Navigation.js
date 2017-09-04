import React, { PureComponent } from 'react';

export default class Navigation extends PureComponent {
    render() {
        const { config } = this.props;
        if (config) {
            const pagination = config.pagination;
            if (pagination === 'continuous') {
                return this.continuousNavigation();
            } else {
                return this.pagingNavigation();
            }
        } else {
            return null
        }
    }

    continuousNavigation() {
        const { loadMore, disableNextButton } = this.props;
        return (
            <div className="buttonRow" style={{ textAlign: 'center' }}>
                <span rel="button"
                    className="materialButton flat"
                    onClick={loadMore}
                    disabled={disableNextButton}
                >Load more</span>
            </div>
        )
    }

    pagingNavigation() {
        const {
            loadPreviousPage,
            loadNextPage,
            disableNextButton,
            disablePrevButton,
            pageInfo,
            translate
            } = this.props;
        return (
            <div className="buttonRow">
                <span rel="button"
                    className="materialButton accent"
                    onClick={loadPreviousPage}
                    disabled={disablePrevButton}
                >
                    {translate('REPORT_SINGLEVIEW_PREVIOUS')}
                </span>
                <span rel="button"
                    className="materialButton accent"
                    onClick={loadNextPage}
                    disabled={disableNextButton}
                >
                    {translate('REPORT_SINGLEVIEW_NEXT')}
                </span>
                <span>{pageInfo}</span>
            </div>
        )
    }

}
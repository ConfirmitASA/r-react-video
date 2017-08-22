//@flow

type shared = {
    /**whether the renderIframe is visible on a page*/
    visible: boolean,
    /**the link to a page to load in an renderIframe*/
    link: string,
    /**whether it's the first time the renderIframe loads (necessary for the survey, because an initial load is the first time the survey loads, and second load is when the survey is submitted)*/
    initialLoad: boolean,
}

export type Props = shared & {
    /** the text to be displayed next to the back button in the nav header */
    headerText?: string,
    /** the callback executed when the user wants to navigate off the SingleView page (hitting back or submit) */
    returnToGrid: () => void,
    /**
     * the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
     */
    closeOnSubmit: boolean,
    loadPreviousItem: () => void,
    loadNextItem: () => void,
    returnToGridAction: () => void,
    disableSingleViewPrev: boolean,
    disableSingleViewNext: boolean,
}

export type State = shared & {
    iframeVisible: boolean,
    iframeHeight: string,
}

export type NavButtonProps = {
    disabled: boolean,
    title: string,
    onClick: (event: Event) => void,
    icon: JSX.element
}
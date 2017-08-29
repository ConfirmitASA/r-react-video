//@flow

export type NavBarProps = {
    /** the callback executed when the user wants to navigate off the SingleView page (hitting back or submit) */
        returnToGrid: () => void,
    /**
     * the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
     */
    closeOnSubmit: boolean,
    loadPreviousItem: () => void,
    loadNextItem: () => void,
    returnToGridAction: () => void,
    singleViewDisablePrev: boolean,
    singleViewDisableNext: boolean,
}
export type Props =  NavBarProps & {
    /**
     * element that will be used for the single view (iframe or hitlist single view)
    */
    children: JSX.Element,
    /** the text to be displayed next to the back button in the nav header */
    headerText?: string,
}

export type NavButtonProps = {
    disabled?: boolean,
    title: string,
    onClick: (event: Event) => void,
    icon: JSX.Element
}
//@flow

export type NavBarProps = {
    /** the callback executed when the user wants to navigate off the SingleView page (hitting back or submit) */
    returnToGridAction: () => void,
    loadPreviousItem: () => void,
    loadNextItem: () => void,
    singleViewDisablePrev: boolean,
    singleViewDisableNext: boolean,
}
export type Props =  NavBarProps & {
    /**
     * element that will be used for the single view (iframe or hitlist single view)
    */
    children: JSX.Element,
}

export type NavButtonProps = {
    disabled?: boolean,
    title: string,
    onClick: (event: Event) => void,
    icon: JSX.Element
}
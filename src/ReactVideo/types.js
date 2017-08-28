//@flow

export type preparedHitlistRecord = {
    link: string,
    image?: string,
    video?: string,
    audio?: string,
    title?: string,
    description?: string,
    [x: string]: any
}

export type reactVideoConfig = {
    [x: string]: any,
    /**
     * question ID for image capture
    */
    image: string,
    /**
    * question ID for video capture
   */
    video: string,
    /**
    * question ID for audio capture
   */
    audio: string,
    /**
     * question ID for record title
    */
    title: string,
    /**
     * question ID for record description
    */
    description: string,

    callBlockId: string,
    videosPerPage: string,
    pagination: 'continuous' | 'paging',
    /**
     * should the user have access to callblock and edit button
    */
    canEdit: boolean
}

export type State = {
    items: preparedHitlistRecord[] | null,
    error: boolean,
    config: reactVideoConfig | null,
    /**
     * defines what is shown ass SingleView component: react element (`view` option) or iframe with callblock
    */
    singleViewMode: 'view' | 'edit',
    /**
     * current hitlist record viewed in SingleView mode
     */
    singleView: preparedHitlistRecord,
    singleViewVisible: boolean,
    /**
     * disables Previous button in single view navigation
    */
    singleViewDisablePrev: boolean,
    /** disables Next button in single view navigation */
    singleViewDisableNext: boolean,
}

export type Props = {
    /**
     * name of the config that maps question ids from data with the data types
     */
    config: string,
    /**
     * display thumbs as image placeholders instead of media icons
     */
    thumbsPlaceholder: boolean
}
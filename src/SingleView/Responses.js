import React, { PureComponent } from 'react'

export default class Responses extends PureComponent {
    render() {
        const { data, columns, columnsMap } = this.props
        const media = ['image', 'video', 'audio'];
        const date = data.interview_start || data.interview_end;
        return (
            <div className="renderArea Responses">
                <div className="Responses--wrapper">
                    {data.title && <div className="Responses--pageTitle"> {data[columnsMap.title]} </div>}
                    {!!date && <div className="Responses--label"> {date} </div>}
                    {data.description && <div className="Responses--value"> {data[columnsMap.description]} </div>}
                    {media.map(mediaItem => {
                        return data[mediaItem] ? (
                            <div className="row">
                                <div className="Responses--label">{columnsMap[mediaItem]}</div>
                                <div className="Responses--value">{this[`_${mediaItem}Renderer`]}</div>
                            </div>
                        ) : null
                    })}
                    {columns != null && columns.map(qID => {
                        return data[qID] ? (
                            <div className="row">
                                <div className="Responses--label">{columnsMap[qID]}</div>
                                <div className="Responses--value">{data[qID]}</div>
                            </div>
                        ) : null
                    })}
                </div>
            </div>
        )
    }

    get _imageRenderer() {
        const { data } = this.props;
        return (<img width="100%" height="auto" src={data.image} />)
    }
    get _videoRenderer() {
        const { data } = this.props;
        return (
            <video controls style={{ width: '100% !important', height: 'auto !important' }}>
                <source src={data.video} type="video/mp4" />
                Your browser does not support the video tag.
          </video>
        )
    }
    get _audioRenderer() {
        const { data, columnsMap } = this.props;
        return <audio src={data.audio} type="audio/mp4" controls style={{ width: '100% !important', height: 'auto !important' }}></audio>
    }
}
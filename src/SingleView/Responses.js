import React, { PureComponent } from 'react'

export default class Responses extends PureComponent {
    render() {
        const { data, columns, columnsMap } = this.props
        const mainColumns = ['title', 'description', 'image', 'audio', 'video'];
        return (
            <div className="renderArea Responses">
                <div class="Responses--wrapper">
                    {mainColumns != null && mainColumns.map(qID => {
                        return data[qID] ? (<div className="row">
                            <div className="Responses--label">{columnsMap[qID]}</div>
                            <div className="Responses--value">{this[`_${qID}Renderer`]}</div>
                        </div>) : null
                    })}
                    {columns != null && columns.map(qID => {
                        return data[qID] ? (<div className="row">
                            <div className="label">{columnsMap[qID]}</div>
                            <div className="value">{data[qID]}</div>
                        </div>) : null
                    })}
                </div>
            </div>
        )
    }

    get _titleRenderer() {
        const { data } = this.props;
        return data.title
    }
    get _descriptionRenderer() {
        const { data } = this.props;
        return data.description
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
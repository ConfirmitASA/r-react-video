import React, { PureComponent } from 'react'

export default class Responses extends PureComponent {
    render() {
        const { data, columns, columnsMap } = this.props
        const mainColumns = ['title', 'description', 'image', 'audio', 'video'];
        return (
            <div className="wrapper">
                {mainColumns!=null && mainColumns.map(qID => {
                    return data[qID]?(<div className="row">
                        <div className="label">{columnsMap[qID]}</div>
                        <div className="value">{data[qID]}</div>
                    </div>):null
                })}
                {columns!=null && columns.map(qID => {
                    return data[qID]?(<div className="row">
                        <div className="label">{columnsMap[qID]}</div>
                        <div className="value">{data[qID]}</div>
                    </div>):null
                })}
            </div>
        )
    }
}
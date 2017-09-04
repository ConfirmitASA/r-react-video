//@flow
import type {NavButtonProps} from './types'

import React, { PureComponent } from 'react'
import MDIcon from 'MDIcon';

export default class NavButton extends PureComponent<NavButtonProps, any> {
    render() {
        const { icon, ...wrapper } = this.props
        return (
            <span className="SingleView--nav-button ripple" {...wrapper}>
                <MDIcon icon={icon} />
            </span>
        )
    }
}
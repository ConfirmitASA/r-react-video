//@flow
import type {Props, NavBarProps } from './types'

import React, { PureComponent } from "react";
import NavButton from './NavButton'
import { ic_arrow_back, ic_arrow_forward, ic_view_module,ic_hourglass } from '../icons';

class NavBar extends PureComponent<NavBarProps,void> {
  render(){
    const { loadPreviousItem, returnToGridAction, loadNextItem, singleViewDisablePrev, singleViewDisableNext, loading } = this.props;
    return (
      <div className="SingleView--header">
        <NavButton disabled={singleViewDisablePrev || loading} title="Previous item" onClick={loadPreviousItem} icon={!loading?ic_arrow_back:ic_hourglass} />
        <NavButton title="Return to the list" onClick={returnToGridAction} icon={ic_view_module} />
        <NavButton disabled={singleViewDisableNext || loading} title="Next Item" onClick={loadNextItem} icon={!loading?ic_arrow_forward:ic_hourglass} />
      </div>
    )
  }
}

export default class SingleView extends PureComponent<Props, void> {
  render() {
    const {children, ...navBarProps} = this.props;
    return (
      <div className="SingleView">
        <NavBar {...navBarProps}/>
        {children}
      </div>
    )
  }
}

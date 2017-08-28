//@flow
import type {Props, NavBarProps } from './types'

import React, { PureComponent } from "react";
import NavButton from './NavButton'
import { ic_arrow_back, ic_arrow_forward, ic_view_module } from '../icons';

const NavBar = function (props:NavBarProps) {
  const { loadPreviousItem, returnToGridAction, loadNextItem, singleViewDisablePrev, singleViewDisableNext } = props;
  return (
    <div className="SingleView--header">
      <NavButton disabled={singleViewDisablePrev} title="Previous item" onClick={loadPreviousItem} icon={ic_arrow_back} />
      <NavButton title="Return to the list" onClick={returnToGridAction} icon={ic_view_module} />
      <NavButton disabled={singleViewDisableNext} title="Next Item" onClick={loadNextItem} icon={ic_arrow_forward} />
    </div>
  )
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

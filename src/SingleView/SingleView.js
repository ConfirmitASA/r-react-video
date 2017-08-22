//@flow
import type {Props, State } from './types'

import React, { Component } from "react";
import NavButton from './NavButton'
import { ic_arrow_back, ic_arrow_forward, ic_view_module } from '../icons';

export default class SingleView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let { visible, link, initialLoad = true } = this.props;

    this.state = {
      visible,
      link,
      initialLoad,
      iframeVisible: false,
      iframeHeight: 'auto',
    };

  }

  static defaultProps = {
    closeOnSubmit: false
  };

  iframeEl: HTMLIFrameElement | void = null;

  componentWillReceiveProps(nextProps: Props) {
    //this.mapPropsToState(nextProps)
  }

  mapPropsToState(props: Props) {
    let { visible, link, initialLoad } = props;
    if (this.props.visible != visible || this.props.link != link || this.props.initialLoad != initialLoad) {
      this.setState({ link, visible, initialLoad });
    }
  }

  componentDidMount() {
    this.mapPropsToState(this.props);
  }


  render() {
    let { link, visible, loadPreviousItem, returnToGridAction, loadNextItem, disableSingleViewPrev, disableSingleViewNext } = this.props;
    return (
      <div className="SingleView" style={{ display: visible ? 'block' : 'none' }}>
        <div className="SingleView--header">
          <NavButton disabled={disableSingleViewPrev} title="Previous item" onClick={loadPreviousItem} icon={ic_arrow_back} />
          <NavButton title="Return to the list" onClick={returnToGridAction} icon={ic_view_module} />
          <NavButton disabled={disableSingleViewNext} title="Next Item" onClick={loadNextItem} icon={ic_arrow_forward} />
        </div>
        <iframe ref={iframe => this.iframeEl = iframe} src={link} />
      </div>
    )
  }

}

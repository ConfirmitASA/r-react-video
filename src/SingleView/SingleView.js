import React from "react";
import MDIcon from 'MDIcon';
import {ic_arrow_back,ic_arrow_forward,ic_view_module} from '../icons';

export default class SingleView extends React.Component {
  /**
   * Creates a single view which is a navigation header followed by an renderIframe that loads external content from a link
   * @param {Object} props
   * @param {Boolean} [props.visible=false] - whether the renderIframe is visible on a page
   * @param {Boolean} props.initialLoad - whether it's the first time the renderIframe loads (necessary for the survey, because an initial load is the first time the survey loads, and second load is when the survey is submitted)
   * @param {String} props.link - the link to a page to load in an renderIframe
   * @param {String} [props.headerText] - the text to be displayed next to the back button in the nav header
   * @param {Function} props.returnToGrid - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
   * @param {Boolean} [props.closeOnSubmit = false] - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
   * */
  constructor(props) {
    super(props);
    let {visible, link, initialLoad=true} = this.props;

    this.state = {
      visible,
      link,
      initialLoad,
      iframeVisible: false,
      iframeHeight : 'auto',
    };

    window.addEventListener("message", this.receiveMessage, false);
  }


  componentWillReceiveProps(nextProps) {
    //this.mapPropsToState(nextProps)
  }

  mapPropsToState(props) {
    let {visible, link, initialLoad} = props;
    if (this.props.visible != visible || this.props.link != link || this.props.initialLoad != initialLoad) {
      this.setState({link, visible, initialLoad});
    }
  }

  componentDidMount() {
    this.mapPropsToState(this.props);
  }

  setupListener(e) {
    this.handshake(this.iframeEl, this.getDomain(this.state.link))
  }

  onLoad=(e)=>{
    if(this.state.link.length>0){
      if (this.state.initialLoad) {
        this.setState({
          visible      : true,
          iframeVisible: true,
          initialLoad  : false
        });
      }
      //this.handshake(e.target, this.getDomain(this.state.link));
    }
  }

  getDomain(link) {
    return link && link.length > 0 ? (/(.+?\/\/.+?)\//gi).exec(link)[1] : null
  }

  handshake(el, targetOrigin) {
    if (targetOrigin != null) {
      let iframe        = el.contentWindow;
      this.targetOrigin = targetOrigin;
      iframe.postMessage('connect', targetOrigin);
    }
  }

  receiveMessage=(event)=>{
    let origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    if (origin !== this.targetOrigin)return;
    if (event.data && event.data.action && this[event.data.action]) {
      this[event.data.action](event.data);
    } else {
      console.warn('action not found for ', event.data, event.data.action, this[event.data.action])
    }
  };

  render() {
    let {link,visible, loadPreviousItem,returnToGridAction,loadNextItem,disableSingleViewPrev,disableSingleViewNext} = this.props;
    return (
      <div className="SingleView" style={{display: visible ? 'block' : 'none'}}>
        <div className="SingleView--header">
          <span className="SingleView--nav-button" disabled={disableSingleViewPrev} title="Previous item" onClick={loadPreviousItem}>
            <MDIcon icon={ic_arrow_back}/>
          </span>
          <span className="SingleView--nav-button" title="Return to the list" onClick={returnToGridAction}>
            <MDIcon icon={ic_view_module}/>
          </span>
          <span className="SingleView--nav-button" disabled={disableSingleViewNext} title="Next Item" onClick={loadNextItem}>
            <MDIcon icon={ic_arrow_forward}/>
          </span>
        </div>
        <iframe ref={iframe => this.iframeEl = iframe} src={link}/>
      </div>
    )
  }

  /**
   * Renders an renderIframe element
   * @param {String} link - url of the renderIframe
   * @param {String} visible - visibility of the renderIframe
   * @param {String} height - height of the renderIframe
   * */
  renderIframe(link) {
    return <iframe
      ref={iframe => {
        this.iframeEl = iframe
      }}
      src={link}
/>;
  }
}

SingleView.defaultProps = {
  closeOnSubmit: false
};

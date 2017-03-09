import React from "react";
import MDIcon from 'MDIcon';
import {ic_arrow_back} from '../icons';

export default class SingleView extends React.Component {
  /**
   * Creates a single view which is a navigation header followed by an renderIframe that loads external content from a link
   * @param {Object} props
   * @param {Boolean} [props.visible=false] - whether the renderIframe is visible on a page
   * @param {Boolean} props.initialLoad - whether it's the first time the renderIframe loads (necessary for the survey, because an initial load is the first time the survey loads, and second load is when the survey is submitted)
   * @param {String} props.link - the link to a page to load in an renderIframe
   * @param {String} [props.headerText] - the text to be displayed next to the back button in the nav header
   * @param {Function} props.backCallback - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
   * @param {Boolean} [props.closeOnSubmit = false] - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
   * */
  constructor(props) {
    super(props);
    let {visible, link, initialLoad=true} = this.props;
    this.state                       = {
      visible,
      link,
      initialLoad,
      iframeVisible: false,
      iframeHeight : 'auto',
    };
    this.onLoad                      = this.onLoad.bind(this);
    this.receiveMessage              = this.receiveMessage.bind(this);
    window.addEventListener("message", this.receiveMessage, false);
  }


  componentWillReceiveProps(nextProps) {
    this.mapPropsToState(nextProps)
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

  onLoad(e) {
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

  receiveMessage(event) {
    let origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    if (origin !== this.targetOrigin)return;
    if (event.data && event.data.action && this[event.data.action]) {
      this[event.data.action](event.data);
    } else {
      console.warn('action not found for ', event.data, event.data.action, this[event.data.action])
    }
  }

  render() {
    let {link, visible,iframeVisible} = this.state;
    return (
      <div className="SingleView" style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="SingleView--header">
          <span className="SingleView--back-button" title="Return to the list" onClick={this.props.backCallback}>
            <MDIcon icon={ic_arrow_back}/>
          </span>
          {this.props.headerText}
        </div>
        {this.renderIframe(link, visible ? iframeVisible : visible)}
      </div>
    )
  }

  /**
   * Renders an renderIframe element
   * @param {String} link - url of the renderIframe
   * @param {String} visible - visibility of the renderIframe
   * @param {String} height - height of the renderIframe
   * */
  renderIframe(link, visible) {
    return <iframe
      ref={iframe => {
        this.iframeEl = iframe
      }}
      src={link}
      onLoad={this.onLoad}
      style={{display: visible ? 'block' : 'none'}}/>;
  }
}

SingleView.defaultProps = {
  closeOnSubmit: false
};

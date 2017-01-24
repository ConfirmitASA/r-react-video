import React from "react"

export default class SingleView extends React.Component{
  /**
   * Creates a single view which is a navigation header followed by an iframe that loads external content from a link
   * @param {Object} props
   * @param {Boolean} [props.visible=false] - whether the iframe is visible on a page
   * @param {Boolean} props.initialLoad - whether it's the first time the iframe loads (necessary for the survey, because an initial load is the first time the survey loads, and second load is when the survey is submitted)
   * @param {String} props.link - the link to a page to load in an iframe
   * @param {String} [props.headerText] - the text to be displayed next to the back button in the nav header
   * @param {Function} props.backCallback - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
   * @param {Boolean} [props.closeOnSubmit = false] - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
   * */
  constructor(props){
    super(props);
    let {visible, link, initialLoad} = this.props;
    this.state = {
      visible,
      iframeVisible:false,
      iframeHeight:'auto',
      link,
      initialLoad
    };
    this.onLoad=this.onLoad.bind(this);
    this.receiveMessage = this.receiveMessage.bind(this);
    window.addEventListener("message", this.receiveMessage, false);
  }

  get targetOrigin(){
    return this._targetOrigin
  }
  set targetOrigin(val){
    this._targetOrigin = val;
  }

  componentWillReceiveProps(nextProps){
    let {visible,link, initialLoad} = nextProps;
    if(this.props.visible!=visible || this.props.link!=link || this.props.initialLoad!=initialLoad){
      this.setState({link, visible, initialLoad});
    }
  }

  setupListener(e){
    //TODO: resize iframe to fit its contents
    this.handshake(this.iframeEl, this.getDomain(this.state.link))
  }

  onLoad(e){
    if(this.state.initialLoad){
      this.setState({
        visible:true,
        iframeVisible:true,
        initialLoad:false
      });
    }
    this.handshake(e.target, this.getDomain(this.state.link));
  }

  getDomain(link){
    return link && link.length>0?(/(.+?\/\/.+?)\//gi).exec(link)[1]:null
  }

  handshake(el, targetOrigin){
    //TODO:organize postMessage, because it's cross-origin
    if(targetOrigin!=null){
      console.log(el,el.contentWindow);
      let iframe = el.contentWindow;
      this.targetOrigin = targetOrigin;
      iframe.postMessage('connect',targetOrigin);
    }
  }

  receiveMessage(event){
    let origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    console.log(event);
    if (origin !== this.targetOrigin)return;
    if(event.data && event.data.action && this[event.data.action]){
      console.log(this[event.data.action],event.data)
      this[event.data.action](event.data);
    } else {
      console.warn('action not found for ', event.data,event.data.action,this[event.data.action])
    }
  }

  resizeIframe({height:iframeHeight}){
    this.setState({iframeHeight});
  }

  render(){
    console.log(this.state);
    return (
      <div className="SingleView" style={{display:this.state.visible>0?'block':'none'}}>
        <div className="SingleView--header">
          {this.backButton(this.props)}{this.props.headerText}
        </div>
        {this.iframe(this.state.link, this.state.visible?this.state.iframeVisible:this.state.visible, this.state.iframeHeight)}
      </div>
    )
  }

  iframe(link,visible,height){
    return <iframe
      ref={iframe=>{this.iframeEl=iframe}}
      src={link}
      onLoad={this.onLoad}
      style={{
        display: visible? 'block' : 'none',
        width:'100%',
        height:height,
        border:0,
        background:'transparent'
      }} />;
  }

  backButton (props){
    return (
      <span className="SingleView--back-button" title="Return to the list" onClick={props.backCallback}>
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </span>
    )
  }

}

SingleView.defaultProps = {
  closeOnSubmit: false
};

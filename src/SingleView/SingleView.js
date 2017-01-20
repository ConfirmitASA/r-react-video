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
   * */
  constructor(props){
    super(props);
    let {visible, link, initialLoad} = this.props;
    this.state = {
      visible,
      iframeVisible:false,
      link,
      initialLoad
    };
    this.onLoad=this.onLoad.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let {visible,link, initialLoad} = nextProps;
    if(this.props.visible!=visible || this.props.link!=link || this.props.initialLoad!=initialLoad){
      this.setState({link, visible, initialLoad});
    }
  }

  onLoad(e){
    if(this.state.initialLoad){
      this.setState({
        visible:true,
        iframeVisible:true,
        initialLoad:false
      });
      //TODO: resize iframe to fit its contents
      this.subscribeSubmit(e.target)
    }
  }

  subscribeSubmit(el){
    //TODO:organize postMessage, because it's cross-origin
    console.log(el,el.contentWindow)
  }

  render(){
    console.log(this.state);
    return this.state.visible>0 && (
      <div className="SingleView">
        <div className="SingleView--header">
          {this.backButton(this.props)}{this.props.headerText}
        </div>
        {this.iframe(this.state.link, this.state.iframeVisible)}
      </div>
    )
  }

  iframe(link,visible){
    return <iframe
      ref={iframe=>{this.iframeEl=iframe}}
      src={link}
      onLoad={this.onLoad}
      style={{
        display: visible? 'block' : 'none',
        width:'100%',
        height:'1300px',
        border:0,
        background:'transparent'
      }} />
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

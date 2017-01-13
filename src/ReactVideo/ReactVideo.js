/**
 * Created by IvanP on 11.01.2017.
 */
import React from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';
import HitlistDS from "r-hitlist-datasource";

class ReactVideo extends React.Component {
  /**
   * @param {Object} props
   * @param {String} props.config - name of the config that maps question ids from data with the data types
   * @param {Boolean} props.thumbsPlaceholder - display thumbs as image placeholders instead of media icons
   *
   * */
  constructor(props){
    super(props);
    this.onSelect=this.onSelect.bind(this);
    this.DS = new HitlistDS();
    console.log(this.DS);
    this.setupDataListener();
    this.state = {
      items:[]
    }
  }

  render() {
    const items=this.state.items;
    let render = null;
    if(items.length!=0){
      render = (
        <div className="GridContainer">
          <ImageGrid
            aspect="16:9"
            actionIcon={this.constructor.actionIcon()}
            onSelect={this.onSelect}
            items={this.state.items}
          />
        </div>
      )
    } else {
      if(this.DS){
        render = (
          <div className="GridContainer">{this.DS.i18n('loadingData')}</div>
        )
      } else {throw new Error('HitlistDatasource is not available')}
    }
    return render
  }

  setupDataListener(){
    if(Y && Y.Global){
      Y.Global.on("reportcontroller:viewModeDataUpdate", filterInfo=>{
        this.initialiseConfig(this.props.config);
        if(this.DS && this.config){
          this.DS.modifier = filterInfo; // filter information as a modifier for data fetch
          this.DS.initialDataLoad().then(response=>this.processData(response))
        }
      })
    } else {
      throw new Error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
    }
  }

  initialiseConfig(configName){
    if(!this.config){
      if(!window[configName]){throw new Error('config is not passed from backed')}
      this.config = window[configName];
    }
  }

  processData(data){
    let config = this.config;
    let newData = data.map((item,index)=>{
      let d ={};
      for(let type in config){
        d[type]=this.constructor.prepareData(item[config[type].key],type);
        if(type == 'image'){
          if(this.props.thumbsPlaceholder){
            d['placeholder'] = d.image;
          }
          d.image = d.image.replace(/_thumb/gi, '');
        }
      }
      // some more fields
      d.id = item.responseid? item.responseid : index;
      ['video','audio','image'].forEach(type=>{
        if(typeof type){d.mediatype = type}
      });
      return d;
    });
    console.log(newData);
    this.setState({items:newData});
  }

  static prepareData(data,type){
    switch(type){
      case 'image':
        let i = document.createElement('span');
        i.innerHTML = data;
        return i.firstElementChild? i.firstElementChild.getAttribute('src') : undefined;
        break;
      case 'description':
      case 'title':
        return !(data.indexOf('-')>-1 && data.trim().length==1) ? data.trim() : undefined;
        break;
      case 'tags': return data.indexOf(',')>-1? data.split(',') : data.indexOf('-')>-1 && data.trim().length==1? undefined : data.trim();
        break;
      case 'link':
        let l = document.createElement('span');
        l.innerHTML = data;
        return l.firstElementChild? l.firstElementChild.getAttribute('href') : undefined;
        break;
      default: console.warn(`"${type}" is not a recognized field for your config, choose from 'description','image','title','tags','link'`); break;
    }
  }

  onSelect(...args){
    console.log(args);
  }

  /*componentDidMount(){
   this.setState({
   items:[
   {
   uid:1,
   image:"http://kenteriksen.com/wp-content/uploads/Kyle-Link-27.5-Plus-02.jpg",
   mediatype:'image',
   title:'Hello',
   description:'World',
   },
   {
   uid:2,
   image:"https://i.ytimg.com/vi/xYwZ5Egjlc0/maxresdefault.jpg",
   mediatype:'video',
   title:'Hello1',
   description:'World1'
   },
   {
   uid:3,
   image:"",
   mediatype:'audio',
   title:'Hello2',
   description:'World2'
   },
   ]
   });

   }*/

  static actionIcon(){
    return  <svg className="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
  }
}

export default ReactVideo;

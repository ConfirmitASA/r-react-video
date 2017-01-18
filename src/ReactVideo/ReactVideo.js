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
            //actionIcon={this.constructor.actionIcon()}
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
    let c = this.config,
        config = {
          id:c.id,
          title:c.title,
          description:c.description,
          image:c.image,
          audio:c.audio,
          video:c.video,
          tags:c.tags,
        };
    let newData = data.map((item,index)=>{
      let parsedData ={};
      for(let key in config){
        parsedData[key]=this.constructor.prepareData(item[config[key]],key);
        // if image - we might want to use a placeholder as the thumb, and load the full image in background
        if(key == 'image'){
          if(this.props.thumbsPlaceholder){
            parsedData['placeholder'] = parsedData.image;
          }
          parsedData.image = parsedData.image.replace(/_thumb/gi, '');
        }
        // calculate mediatype or a placeholder icon
        if(['video','audio','image'].indexOf(key)>-1 && config[key]){
            parsedData.mediatype = key
        }
      }

      // get id for keys
      parsedData.id = item.responseid? item.responseid : index;
      // calculate link passed as `slink` property in data
      if(item.slink){
        let l=item.slink;
        parsedData.link = (/href='(.+?)'/gi).exec(l)[1];
      }
      return parsedData;
    });

    //update state with the new set of data
    this.setState({items:newData});
    if(this.props.verbose){
      console.log("data: ",newData);
    }
  }

  static prepareData(data,type){
    switch(type){
      case 'image':
        let result = (/src='(.+?)'/gi).exec(data);
        return result && result !=null && result[1]? result[1] : undefined;
        break;
      case 'description':
      case 'title':
        return !(data.indexOf('-')>-1 && data.trim().length==1) ? data.trim() : undefined;
        break;
      case 'tags': return data.indexOf(',')>-1? data.split(',') : data.indexOf('-')>-1 && data.trim().length==1? undefined : data.trim();
        break;
    }
  }

  onSelect(data){
    //TODO: launch iframe page instead
    if(this.props.verbose){
      console.log("clickde item data:",data);
    }
    window.location = data.link;
  }

  static actionIcon(){
    return  <svg className="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
  }
}

export default ReactVideo;

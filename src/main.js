/**
 * Created by IvanP on 11.01.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import mainCSS from './main.css';
import ReactVideo from './ReactVideo/ReactVideo';
import ReportalBase from 'r-reportal-base';

/**
 * initialise HitList on DOMContentLoaded for a quicker cold-start, no need to wait for the original HitList
 * @param {String} configName - name of the variable passed to DOM as a config
 * @param {Boolean} [thumbsPlaceholder=true] - display thumbs as image placeholders instead of media icons
 * */
const launchVideoHitlist = (configName,thumbsPlaceholder=true) => {
  if(!configName){
    throw new Error('config is not specified!')
  } else if(configName && typeof configName != 'string'){
    throw new TypeError(`config name must be a string, not a ${typeof configName}`)
  }
  window.addEventListener("DOMContentLoaded", ()=>{
    ReactDOM.render(<ReactVideo config={configName} thumbsPlaceholder={thumbsPlaceholder} verbose="\{true}"/>,document.getElementById('root'))
  });
};

window.Reportal = window.Reportal || {};
ReportalBase.mixin(window.Reportal,{
  launchVideoHitlist
});

# r-react-video
This is a video wall hitlist project.

It requires React and ReactDOM be included on the page where you call it, make sure you embed them in Report Master properties in external js like this: `//unpkg.com/react@15/dist/react.min.js;//unpkg.com/react-dom@15.4.2/dist/react-dom.min.js`

### Setup

```javascript
Reportal.launchVideoHitlist('pConfig', true);
```
Where `pConfig` is the name of the config variable sent from the backend

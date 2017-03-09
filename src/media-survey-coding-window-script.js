function receiveMessage(event)
{
  // Do we trust the sender of this message?
  if (event.origin == "https://reportal.euro.confirmit.com" ||
    event.origin == "https://reportal.us.confirmit.com" ||
    event.origin == "https://reportal.confirmit.com.au"){

//document.querySelector('.debugger').textContent += event.origin + ' ' + event.data;
    console.log(event);
    // event.source is window.opener
    // event.data is "hello there!"

    // Assuming you've verified the origin of the received message (which
    // you must do in any case), a convenient idiom for replying to a
    // message is to call postMessage on event.source and provide
    // event.origin as the targetOrigin.
    var body = document.body, html = document.documentElement;
    var iframeHeight = document.body.clientHeight;

/*
    pm({
      action: 'resizeIframe',
      height: iframeHeight
    },event.source,event.origin)
*/
  }}

function pm(message,source,origin){
  source.postMessage(message,origin);
}
//window.addEventListener("message", receiveMessage, false);

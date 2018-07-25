"use strict";

function webSocketPress(container) {
// open connection
var socket = new WebSocket("ws://localhost:8081");


document.getElementById(container).querySelector('.pressure__button').onclick = () => {
 //var outgoingMessage = this.message.value;
 let display = document.getElementById(container).querySelector('.calculator__display');
 var outgoingMessage = display.innerHTML;
 socket.send(outgoingMessage);
 let displayUpper = document.getElementById(container).querySelector('.calculator__display-upper');
 displayUpper.innerHTML = outgoingMessage;
 return false;

 console.log('pressureFrom');
};

// input messages handler
socket.onmessage = function(event) {
  var incomingMessage = event.data;
  showMessage(incomingMessage);
  };

// show message inside div#subscribe
function showMessage(message) {
  let display = document.getElementById(container).querySelector('.calculator__display');
  display.innerHTML = message;

};
}
export default webSocketPress;

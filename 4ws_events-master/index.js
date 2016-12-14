/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP770605";
}


function exampleAttacher() {
  window.exampleid.addEventListener("click", exampleEventHandler);
}

function exampleEventHandler(event) {
    console.log("This is a", event.type, "event.");
}

function snitchUpdater(event) {
  if (event.type == 'mouseover') {
    window.snitch.textContent = "IN";
  }
  if (event.type == 'mouseout') {
    window.snitch.textContent = "OUT";
  }
}


function targetTextToConsole(e){
  var el = e.target;
  //console.log(el);
  console.log(el.textContent);
}
function tttcAttacher(){
  button0.addEventListener("click",targetTextToConsole);
}

function lovelyParaAttacher(){
  thisisalovelyparagraph.addEventListener("click",lovelyToggle);
}

function lovelyButtonAttacher(){
  button1.addEventListener("click",lovelyToggle);
}

function concatAttacher(){
  //conzone.addEventListener("input",concat);
  in1.addEventListener("change",concat);
  in2.addEventListener("change",concat);
}

function concat(e){
  var newText = in1.value + in2.value;
  out1.textContent = newText;
}
function snitchAttacher(){
  mousewatcher.addEventListener("mouseover",snitchUpdater);
  mousewatcher.addEventListener("mouseout",snitchUpdater);
}

function reportAttacher(){
  mousereporter.addEventListener("mousemove",reportUpdater);
}

function reportUpdater(e){
  var newTxt = "x: " + e.screenX + " y: " + e.screenY;
  console.log(newTxt);
  report.textContent = newTxt;
}

function idValidationAttacher(){
  newid.addEventListener("input",validateDisStuff);
}

function validateDisStuff(){
  if(newid.value.includes(" ")){
    newid.classList.add("invalid");
  }
  else{
    newid.classList.remove("invalid");
  }
}

/*
 * This is index.js
 * Start by modifying the id function to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP770605";
}

runme();

// draws a stick figure on the canvas
// the stick figure will stand over the point X,Y (default: 100,150)
// facing is a degree in which the stick figure is facing: 0 is to the right, 90 is towards us
function drawStickFigure(el, x, y, facing) {
  var c = el.getContext("2d");

  // set our drawing style
  c.lineWidth = 2;
  c.lineCap = "round";
  c.lineJoin = "round";
  c.strokeStyle = "#000";

  if (x == null) x = 100;
  if (y == null) y = 150;

  // the arms and the legs look the same
  drawLimbs(c, x, y)            // legs
  drawLimbs(c, x, y-40)         // arms

  // body is just a line
  line(c, x, y-40, x, y-80)     // body

  // head is a circle with eyes and a smile
  circle(c, x, y-100, 20)       // head
  drawFace(c, x, y-100, facing) // face


  // helpful functions start here
  function drawLimbs(c, x, y) {
    line(c, x-20, y, x, y-40)
    line(c, x+20, y, x, y-40)
  }

  function drawFace(c, x, y, facing) {
    // if the `facing` parameter is not given, the stick figure will face towards us
    if (facing == null) facing = 90;

    // make sure the `facing` parameter is between 0 and 360
    facing = facing % 360; // that's like the mathematical remainder after a division
    if (facing < 0) facing += 360;

    if (facing > 180) return;  // facing away from us, don't draw a face

    // we'll fake the turning of the face by shifting the eyes and the smile by an offset of up to 10 pixels
    var faceOffset = 0;
    if (facing <= 180) {
      faceOffset = (facing-90)/9;
    }

    circle(c, x-7-faceOffset, y-5, 1)  // 7 is distance from center, 5 is how high the eyes are from the head's center, 1 is eye size
    circle(c, x+7-faceOffset, y-5, 1)

    // decrease the smile size here
    var smileSize = 70; // size of smile in degrees of angle; 360 would be a full circle
    var startAngle = rad(90-smileSize/2-2*faceOffset)
    var endAngle   = rad(90+smileSize/2-2*faceOffset)
    arc(c, x-faceOffset, y, 12, startAngle, endAngle) // 12 is the radius of the smile circle
  }

  // draw a line on canvas context `c`, from point x1,y1 to point x2,y2
  function line(c, x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.stroke();
  }

  // draw a circle on canvas context `c`, centered on x,y, with radius r
  // also fill the circle with white (so it's not transparent)
  function circle(c, x, y, r) {
    c.beginPath()
    c.fillStyle="#fff"
    c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
    c.fill()
    c.stroke()
  }


  // draw an arc on canvas context `c`, cenetered on x,y, with radius r, from angleStart to angleEnd
  function arc(c, x, y, r, angleStart, angleEnd) {
    c.beginPath();
    c.arc(x, y, r, angleStart, angleEnd, false)
    c.stroke();
  }

  // convert from degrees to radians
  function rad(x) {
    return x * Math.PI / 180;
  }


}
  //===========================================My Work==========================
function drawLines(canvas){

  //var c = document.getElementById("canvas4");
  var pen = canvas.getContext("2d");

  pen.beginPath();
  pen.moveTo(100,100);
  pen.lineTo(500,100);
  pen.stroke();

  pen.beginPath();
  pen.moveTo(100,200);
  pen.lineTo(300,200);
  pen.stroke();
}

function drawTriangle(canvas,x1,y1,x2,y2,x3,y3){

  var pen = canvas.getContext("2d");
  pen.beginPath();
  pen.moveTo(x1,y1);
  pen.lineTo(x2,y2);
  pen.lineTo(x3,y3);
  pen.lineTo(x1,y1);
  //rgb
  pen.fillStyle = "#0f0";
  pen.strokeStyle = "#f00";
  pen.fill();
  pen.stroke();
}

function drawSpartacus(canvas){
  drawStickFigure(canvas);

  var pen = canvas.getContext("2d");

  pen.beginPath();
  pen.moveTo(115,120);
  pen.lineTo(125,100);
  pen.stroke();
  pen.width = "150px";
  pen.moveTo(125,100);
  pen.lineTo(140,70);
  pen.stroke();
}

function drawGrid(canvas){

  var pen = canvas.getContext("2d");

  for(var i= 0; i < canvas.width; i += 50){
    for(var j= 0; j < canvas.height; j += 50){
      drawSquare(pen,i,j,50);
    }
  }
}

//s = size
function drawSquare(pen,x,y,s){
  pen.beginPath();

  pen.moveTo(x,y);
  pen.lineTo(x+s,y);
  pen.lineTo(x+s,y+s);
  pen.lineTo(x,y+s);
  pen.lineTo(x,y);

  pen.stroke();
}

function drawCzechFlag(canvas){
  var pen = canvas.getContext("2d");

  canvas.style = "background: #000"

  pen.beginPath();
  pen.moveTo(0,0);
  pen.lineTo(canvas.width,0);
  pen.lineTo(canvas.width,canvas.height);
  pen.lineTo(0,canvas.height);
  pen.lineTo(0,0);
  pen.fillStyle = "#fff";
  pen.fill();

  //red shapey thing
  pen.beginPath();
  pen.moveTo(0,canvas.height);
  pen.lineTo(canvas.width,canvas.height);
  pen.lineTo(canvas.width,canvas.height/2);
  pen.lineTo(0,canvas.height/2);
  pen.lineTo(0,canvas.height);
  pen.fillStyle = "#f00";
  pen.fill();

  //blue triangle
  pen.beginPath();
  pen.moveTo(0,0);
  pen.lineTo(0,canvas.height);
  pen.lineTo(canvas.width/2,canvas.height/2);
  pen.lineTo(0,0);
  pen.fillStyle = "#00f";
  pen.fill();

}


function getSdata(u){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", u, false);

  xhr.send();

  return xhr.responseText
}

function showMessage(el,u){

  el.textContent = getSdata(u);
}


function showList(el,u){

  var data = JSON.parse(getSdata(u));

  for(var w of data){
    var e = document.createElement("li");
    e.textContent = w;
    el.appendChild(e);
  }

}

function startShowingMessage(el,u){

  setInterval(function(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", u, true);

  xhr.onload = function(){

    //console.log(xhr.responseText);

    el.textContent = xhr.responseText;

  };

  xhr.send();

},1000);

  //setInterval(function(){getMessage(el,u,xhr); },1000);

}

function handleError(el,u){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", u, false);

  xhr.send();

  if (xhr.status == 200) {
    el.textContent = xhr.responseText;
  }
  else{
    el.textContent = "OH DEAR";
  }
}

function drawBox(canvas, u){

  setInterval(function(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", u, true);

  xhr.onload = function(){

    var pen = canvas.getContext("2d");

    var point = xhr.responseText.split(",");

    var val1 = point[0].split(":");

    var val2 = point[1].split(":");

    drawSquare(pen,parseInt(val1[1]),parseInt(val2[1]),10)

  };

  xhr.send();

},1000);

}
function runme(){
  var canvas = document.getElementById("wales");

  var context = canvas.getContext('2d');

  var base_image = new Image();
  base_image.src = 'welshDragon.jpg';
  base_image.onload = function(){
  context.drawImage(base_image, 0, 0);

}
}

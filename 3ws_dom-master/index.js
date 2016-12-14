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
    return "up770605";
    // e.g. return "UP654321";
}

function fn() {
    return "Andrew";
}

function sn() {
    return "Tootell";
}

// add your functions here

function addTextTo(el, text){
  var currentText = el.textContent;
  el.textContent = currentText + text;
}

function replaceText(el, text){
  el.textContent = text;
}

function moreBears(){
  var _ = document.getElementById('animals')
  _.src = 'http://placebear.com/400/200';
  _.alt = 'A bear.';
  _.title = 'A BEAR!';
}

function setId(el, newId){
  el.id = newId;
  return el;
}

function setClass(el, newClass){
  el.classList = newClass;
  return el;
}

function addAClass(el, newClass){
  el.classList.add(newClass);
  return el;
}

function removeAClass(el, newClass){
  el.classList.remove(newClass);
  return el;
}

function newElement(name){
  var el = document.createElement(name);
  return el;
}

function findElementByQuery(query){
  var els = document.querySelectorAll(query);
  return els;
}

function reverseList(query){

  var selected = document.querySelectorAll(query)[0];
 var el = selected.children;
 var newEl = [0];
 for (var i=0; i<el.length;i++){
   newEl[i] = el[el.length-(i+1)].textContent;
 }
 for (var i=0; i<el.length;i++){
   el[i].textContent = newEl[i];
 }
 return selected;
}

function mover(move,here){
var el = document.querySelectorAll(move)[0];
var loc = document.querySelectorAll(here)[0];
//loc.getLength
loc.insertBefore(el,loc[3])
//loc.insert(el);
}

function filler(list,words){

  for(var w of words){
    var el = document.createElement("li");
    el.textContent = w;
    list.append(el);
  }
}

function dupe(sele){
  var el = document.querySelectorAll(sele)[0];
  var duplicate = document.createElement(el.tagName);
  duplicate.textContent = el.textContent;
  el.parentNode.append(duplicate);
}

function removeAll(sele){
var els = document.querySelectorAll(sele);
for(var el of els){
  el.remove()
  }
}


function getUserData(){
  var p = {}
  function user(){
    name: "";
    speed: 0;
    student: false;
  };
  p.name = findElementById("username").value;
  p.speed = parseInt(findElementById("speed").value);
  p.student = findElementById("student").checked;
  console.log(p);
  return p;
}

function findElementById(Id){
  var el = document.getElementById(Id);
  return el;
}

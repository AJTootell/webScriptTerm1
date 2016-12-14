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

var remembered

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

function example() {
    // replace this example with
    // your first function then
    // add more below as necessary.
    return;
}

//DATA

function add(a,b){
	return a + b
}
function subtract (a,b){
	return a - b
}
function checkObject(x){
	x.checked = true
}
function checkObjectInside(x){
	if(x.data != undefined){ x.data.checked = true }
}
function arraySet(a,b,c){
	if(b < a.length && typeof(b) === "number" && b % 1 == 0) { a[b] = c}
}

//FUNCTIONS

function addAll(x){
	var count = 0
	for(var num of x){count += num}
	return count
}
function larger(a,b){
	return a > b ? a:b
}
function largest (x){
	var high = x[0]
	for(var n of x){high = larger(high,n)}
	return high
}
function compare(x,y){
	for(var i=0 ; i < x.length ; i++){
		if(x[i] != y[i]){
      return false}
	}
	return true
}
function addToAll(x,a){
    for(var i=0 ; i < x.length ; i++){
      x[i] += a
    }
    return x
}
function rememberThis(a){
  remembered = a
}

//CONTROL FLOW
function nArray(n){
  var array = [];
  for(var i =0 ; i<n ; i++){
    array[i] = i +1;
  }
  return array
}

function addAllOpt(x){
  var total = 0;
  if(x != null || x != undefined){
    for(var i of x){
      total += i;
    }
  }
  return total;
}

function divisors(x,a){
  var y = [];
  for(var i of x){
    if((i % a) == 0){
      y.push(i);
    }
  }
  return y;
}
function multiples(len,mult){
  var mults = [];
  for(var i=0;i<len;i++){
    mults[i] = (i+1)*mult;
  }
  return mults;
}

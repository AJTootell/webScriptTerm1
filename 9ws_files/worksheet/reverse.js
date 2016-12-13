#!/usr/bin/env node

if (process.argv.length<3) {
  console.log("Syntax: node reverse <file to reverse> <file output with reversed text>");
  console.log("e.g. node filename2 dummy.txt redummey.txt");
  process.exit();
}

var fs = require('fs');
var funcs = require('./texttools.js');
var filename = process.argv[2];
var data = fs.readFileSync(filename, 'utf8');
var reData = funcs.reverse(data);
var writeStream = fs.createWriteStream(process.argv[3], {flags: 'w'} );

writeStream.write(reData);
writeStream.end();
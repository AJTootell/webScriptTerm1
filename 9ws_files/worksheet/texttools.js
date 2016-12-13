function fileToArray(path){
 var fs = require('fs');
 var data = fs.readFileSync(path,'utf8');

  var words = [];
  words = data.split('\n');

  if(words[words.length -1] == ""){
   words.pop();
  }

  return words;
}

function reverse(toBeRe){
	var out = "";
	for(var char of toBeRe){
		out = char + out;
	}
	return out
}

module.exports.fileToArray = fileToArray;
module.exports.reverse = reverse;
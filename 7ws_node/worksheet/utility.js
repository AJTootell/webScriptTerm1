function add(a,b) {
	return a+b;
}

function compare(x,y){
	if(x.length != y.length) return false;
	for(var i=0 ; i < x.length ; i++){
		if(x[i] != y[i]){
     			return false;
		}
	}
	return true;
}

function largest (arr){
	var largest = 0;
	for(var num of arr){
		if(largest < num){
			largest = num;
		}
	}
	return largest;
}

module.exports.add = add;
module.exports.compare = compare;
module.exports.largest = largest;

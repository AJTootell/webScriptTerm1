var 
_ = require('underscore');

function range(arrR){
 return (_.max(arrR) - _.min(arrR));
}

module.exports.range = range;

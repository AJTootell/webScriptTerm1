var mysql = require('mysql');
var config = require('./sql_config.json');

function saveCar(reg,make,model,year,price,cb){

  var sql = mysql.createConnection(config.mysql);

  sql.on('error', function(err) {
    cb('err1');
    sql.end();
  });

  var car = {};

  car.reg = reg;
  car.make = make;
  car.model = model;
  car.year = year;
  car.price = price;

  var insertQuery = sql.format('INSERT INTO car SET ? ;', car);

  sql.query(insertQuery, function (err) {
    if (err){
      cb(err);}
    else{
	cb();
	}
    sql.end();
  });
}

function getAveragePrice(year, cb){

  var sql = mysql.createConnection(config.mysql);
  sql.on('error', function(err) {
    cb(err);
    sql.end();
  });

  var query = sql.format('select price from car where year = ?;', year);

  var price = 0;
  var incre = 0;

  sql.query(query, function (err, data) {
	console.log(data);
    if (err) {
      cb(err);
    }else if(data[0] == null){
     cb('empty');
    }
     else{
      data.forEach(function (row) {
        price += row.price;
        incre += 1;
      });
      cb(null,price/incre);
    }
    sql.end();
  });
}

module.exports.saveCar = saveCar;
module.exports.getAveragePrice = getAveragePrice;

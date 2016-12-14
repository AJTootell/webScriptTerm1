/*
 * list all the contacts
 */

var mysql = require('mysql');

var config = require('./sql_config.json');

// create a connection to the database
var sql = mysql.createConnection(config.mysql);

// handle unexpected errors by just logging them
sql.on('error', function(err) {
  console.error(err);
  sql.end();
});

// prepare query
var query = 'select fname, lname, phone from contact order by lname, fname, phone';

// now query the table and output the results
sql.query(query, function (err, data) {
  if (err) return error('failed to run the query', err);

  data.forEach(function (row) {
    console.log(row.fname + ' ' + row.lname + '  ' + row.phone);
  });
  console.log('total ' + data.length + ' rows.');
  sql.end();
});

// the program ends here


// helpful function

function error(msg, error) {
  console.error(msg + ': ' + error);
  sql.end();
}

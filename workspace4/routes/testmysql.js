var password = require('./password');
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    port : 3306,
    database:'localtestproject',
    password : password
});

pool.getConnection(function(err, connection) {
  if(err)
    console.log(err);
  // else {
  //   pool.query('SELECT * FROM bus', function(err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(results);
  //   });
  // }
});

module.exports = pool;
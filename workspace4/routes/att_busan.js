var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');
toatt.get('/', function(req, res, next){
  pool.getConnection(function(err, connection){
    var sql = "select * from attraction where r_name = '부산'";
    connection.query(sql, function(err, rows){

    res.render('att_busan.ejs', {rows:rows});

    for(var i = 0; i<rows.length; i++)
      console.log(rows[i]);

    });
    connection.release();
  });
});
module.exports = toatt;

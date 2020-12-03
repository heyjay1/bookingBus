var express = require('express');
var toatt = express.Router();

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    port:3306,
    database:'project',
    password : '6124'
});

toatt.get('/', function(req, res, next){
  pool.getConnection(function(err, connection){
    var sql = "select * from attraction where r_name = '공주'";
    connection.query(sql, function(err, rows){

    res.render('att_gongju.ejs', {rows:rows});

    for(var i = 0; i<rows.length; i++)
      console.log(rows[i]);

    });
    connection.release();
  });
});
module.exports = toatt;

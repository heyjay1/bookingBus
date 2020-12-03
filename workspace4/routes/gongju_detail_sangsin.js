var express = require('express');
var toatt = express.Router();

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'project',
  password: '6124'
});

toatt.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    var sql = "select a_context from attraction where a_name = '상신리 돌담길'";
    connection.query(sql, function(err, rows) {
      console.log('rows : ', rows);
      res.render('gongju_detail_sangsin.ejs', {
        rows: rows
      });
      connection.release();
    });
  });
});
module.exports = toatt;

var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');

toatt.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    var sql = "select a_context from attraction where a_name = '경기전'";
    connection.query(sql, function(err, rows) {
      console.log('rows : ', rows);
      res.render('jeonju_detail_keounggi.ejs', {
        rows: rows
      });
      connection.release();
    });
  });
});
module.exports = toatt;

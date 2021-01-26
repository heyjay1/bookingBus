var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');

toatt.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    var sql = "select a_context from attraction where a_name = '감천문화마을'";
    connection.query(sql, function(err, rows) {
      console.log('rows : ', rows);
      res.render('busan_detail_gamchun.ejs', {
        rows: rows
      });
      connection.release();
    });
  });
});
module.exports = toatt;

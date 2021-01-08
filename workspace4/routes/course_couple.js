var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');
toatt.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
        var sql = "select * from recommand where course = '커플여행' and a_name not Like '%관'";
        connection.query(sql, function(err, rows) {
            console.log('row : ', rows);
            res.render('course_couple.ejs', {rows: rows});
            connection.release();
    });
  });
});
module.exports = toatt;

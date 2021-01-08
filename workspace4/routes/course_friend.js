var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');

toatt.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
        var sql = "select * from recommand where course = '우정여행' and a_name not Like '%궁' and a_name not Like '%관' ";
        connection.query(sql, function(err, rows) {
            console.log('row : ', rows);
            res.render('course_friend.ejs', {rows: rows});
            connection.release();
    });
  });
});
module.exports = toatt;

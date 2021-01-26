var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');

toatt.get('/', function(req, res, next) {
  pool.getConnection(function(err, connection) {
        var sql = "select * from recommand where course = '나혼자여행' and a_name not like '%장' and a_name not like '%월드'"; // 혼자 해수욕장 가진 않으니..
        connection.query(sql, function(err, rows) {
            console.log('row : ', rows);
            if(req.user == null) {
              res.render('course_alone.ejs', {rows: rows, user_id: null});
            } else {
              res.render('course_alone.ejs', {rows: rows, user_id: req.user.user_id});
            }
            connection.release();
    });
  });
});
module.exports = toatt;

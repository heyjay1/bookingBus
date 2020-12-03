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
        var sql = "select * from recommand where course = '가족여행'";
        connection.query(sql, function(err, rows) {
            console.log('row : ', rows);
            res.render('course_family.ejs', {rows: rows});
            connection.release();
    });
  });
});
module.exports = toatt;

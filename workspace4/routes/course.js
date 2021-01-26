var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');

toatt.get('/alone', function(req, res, next) {
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

toatt.get('/couple', function(req, res, next) {
  pool.getConnection(function(err, connection) {
        var sql = "select * from recommand where course = '커플여행' and a_name not Like '%관'";
        connection.query(sql, function(err, rows) {
            console.log('row : ', rows);
            if(req.user == null) {
              res.render('course_couple.ejs', {rows: rows, user_id: null});
            } else {
              res.render('course_couple.ejs', {rows: rows, user_id: req.user.user_id});
            }
            connection.release();
    });
  });
});

toatt.get('/family', function(req, res, next) {
  pool.getConnection(function(err, connection) {
        var sql = "select * from recommand where course = '가족여행'";
        connection.query(sql, function(err, rows) {
            console.log('row : ', rows);
            if(req.user == null) {
              res.render('course_family.ejs', {rows: rows, user_id: null});
            } else {
              res.render('course_family.ejs', {rows: rows, user_id: req.user.user_id});
            }
            connection.release();
    });
  });
});

toatt.get('/friend', function(req, res, next) {
  pool.getConnection(function(err, connection) {
        var sql = "select * from recommand where course = '우정여행' and a_name not Like '%궁' and a_name not Like '%관' ";
        connection.query(sql, function(err, rows) {
            console.log('row : ', rows);
            if(req.user == null) {
              res.render('course_friend.ejs', {rows: rows, user_id: null});
            } else {
              res.render('course_friend.ejs', {rows: rows, user_id: req.user.user_id});
            }
            connection.release();
    });
  });
});

module.exports = toatt;

var express = require('express');
var toLogout = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    port:3306,
    database:'project',
    password : '6124'
});

toLogout.get('/',function(req,res){
  req.logout();
  // res.render('main.ejs', {user_id: null});
  pool.getConnection(function(err, connection){
      var today = new Date();
      var month = today.getUTCMonth() + 1; //months from 1-12
      var day = today.getUTCDate();
      var year = today.getUTCFullYear();

      today = year + "-" + month + "-" + day;
      console.log(today);
      var sqlForSelect = "select * from region where ? between start_date and finish_date;";
      connection.query(sqlForSelect,today, function(err, rows){
        if(err) {console.log(err);}
        else {
          for (var i = 0; i < rows.length; i++) {
            console.log(rows[i]);
          }
          if(req.user == null){
              res.render('main.ejs', {user_id: null, rows:rows});
          }
          else
            res.render('main.ejs', {user_id: req.user.user_id, rows: rows});
      		connection.release();
        }
      });
    });
});

module.exports = toLogout;

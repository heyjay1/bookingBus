var express = require('express');
var toChangePw = express.Router();
var passport = require('passport');
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    port:3306,
    database:'project',
    password : '6124'
});

toChangePw.get('/',function(req,res){
  if(req.user == null)
    res.render('changepw.ejs', {user_id: null, pass: null});
  else
    res.render('changepw.ejs', {user_id: req.user.user_id, pass: null});
});

toChangePw.post('/', function(req, res, next){
  var oldPw = req.body.usrOldPw;
  var newPw = req.body.usrPwd;

  pool.getConnection(function(err, connection){
    var sqlForUpdate = "update members set m_password = ? where m_id = ? and m_password = ?;";
    var params = [newPw, req.user.user_id, oldPw];
    connection.query(sqlForUpdate, params, function(err, rows){
      if(err) {console.log("update error: " + err);}
      else{
        if(rows.affectedRows > 0){
          res.render('changepw.ejs', {user_id: req.user.user_id, pass: true});
        } else{
          res.render('changepw.ejs', {user_id: req.user.user_id, pass: false});
        }
      }
    });
  });
});

module.exports = toChangePw;

var express = require('express');
var toDropMember = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var pool = require('./testmysql');

toDropMember.get('/',function(req,res){
  if(req.user == null)
    res.render('dropMember.ejs', {user_id: null});
  else
    res.render('dropMember.ejs', {user_id: req.user.user_id});
});

toDropMember.post('/', function(req, res, next){
  pool.getConnection(function(err, connection){
    var sqlForDelete = "delete from members where m_id = ?;";
    connection.query(sqlForDelete, [req.user.user_id], function(err, rows){
      if(err) {console.log("delete error: " + err);}
      else{
        res.redirect('/logout');
      }
    });
  });
});

module.exports = toDropMember;

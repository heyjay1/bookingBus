var express = require('express');
var toLogin = express.Router();
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
var pass;

toLogin.get('/',function(req,res){
  res.render('login.ejs', {pass: null});
});

toLogin.post('/', passport.authenticate(
  'local', {failureRedirect: '/login', failureFlash: true}),
  function(req, res) {
    console.log("user: " + req.user.user_id);
    if(pass)
      res.redirect('/main');
    else
      res.render('login.ejs', {pass: pass});
  }
);

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
  }, function(req, username, password, done){
    var params = [username, password];
    pool.getConnection(function(err, connection){
      var sqlForLoggin = "select count(*) as count from members where m_id = ? and m_password = ?;";
      connection.query(sqlForLoggin, params, function(err, rows){
        if(err) {return done(false, null);}
        else {
          for(var i=0;i <rows.length; i++)
            console.log(rows[i]);
          //로그인 성공
          if(rows[0].count == 1){
            pass = true;
            return done(null, {'user_id': username});
          }
          //로그인 실패
          else {
            console.log("로그인실패");
            pass = false;
            return done(false, null);
          }
        }
      });
    });
}));

passport.serializeUser(function(user, done){
  done(null, user)
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = toLogin;

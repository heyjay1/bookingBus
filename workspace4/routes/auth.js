var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var pool = require('./testmysql');


//회원가입
router.get('/join', function(req, res, next){
  res.render('join.ejs');
});

router.post('/join', function(req, res, next){
  var USER_ID = req.body.user_id;
  var USER_PASS = req.body.passwd;
  var USER_NAME = req.body.name;
  var USER_MAIL = req.body.email;
  var tel1 = req.body.tel1;
  var tel2 = req.body.tel2;
  var tel3 = req.body.tel3;
  var USER_TEL = tel1 + tel2 + tel3;
  var USER_SEX = req.body.gender;
  var USER_NUMBER = req.body.human_number;
  var datas = [USER_NAME, USER_NUMBER,USER_MAIL,USER_TEL,USER_SEX,USER_ID, USER_PASS];

  pool.getConnection(function (err, connection) {
    if(err)
      throw err;
    //회원가입
    var sqlForInsertMember = "INSERT INTO members(m_name, m_address,m_mail,m_hp,m_sex,m_id, m_password) VALUES(?,?,?,?,?,?,sha2(?, 512))";
    connection.query(sqlForInsertMember, datas, function(err, rows){
        if(err) throw err;
        res.redirect('/');
        connection.release();
      });
    });
});

//회원가입 - 아이디 중복 체크
router.get('/join/idcheck', function(req, res, next) {
  console.log("here is auth.js");
  console.log(req.body.user_id);
  res.render('idcheck.ejs', {user_id: null, pass : null});
});

router.post('/join/idcheck', function(req, res, next) {
  //아이디 중복 검사
  var sqlForCheckID = "SELECT COUNT(*) as result FROM members WHERE m_id = ?";
  var IDCheck = req.body.user_id;
  pool.getConnection(function(err, connection) {
    connection.query(sqlForCheckID, IDCheck, function(err, rows) {

      if(err) throw err;
      //중복아이디가 존재하는 경우
      if(rows[0].result > 0) {
        res.render('idcheck.ejs', {user_id: IDCheck, pass : false});
      }
      //중복 아이디가 존재하지 않는 경우
      else {
        res.render('idcheck.ejs', {user_id: IDCheck, pass : true});
      }
    });
  });
});


//로그인
router.get('/login',function(req,res){
  res.render('login.ejs', {pass: null});
});

router.post('/login', passport.authenticate(
  'local', {failureRedirect: '/auth/login', failureFlash: true}),
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
      var sqlForLoggin = "select count(*) as count from members where m_id = ? and m_password = sha2(?, 512);";
      connection.query(sqlForLoggin, params, function(err, rows){
        if(err) {return done(false, null);}
        else {
          //로그인 성공
          if(rows[0].count == 1){
            pass = true;
            return done(null, {'user_id': username});
          }
          //로그인 실패
          else {
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


//로그아웃
router.get('/logout',function(req,res){
  req.logout();
  // res.render('main.ejs', {user_id: null});
  pool.getConnection(function(err, connection){
    var region_data;
    //db에서 지역 갖고오기
    var sql = "select r_name, r_id from region;";
    connection.query(sql, function(err, rows){
      region_data = rows;
    });

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
              res.render('main.ejs', {user_id: null, rows:rows, region : region_data});
          }
          else
            res.render('main.ejs', {user_id: req.user.user_id, rows: rows, region : region_data});
      		connection.release();
        }
      });
    });
});

//회원탈퇴
router.get('/unsubscribe',function(req,res){
  if(req.user == null)
    res.render('dropMember.ejs', {user_id: null});
  else
    res.render('dropMember.ejs', {user_id: req.user.user_id});
});

router.post('/unsubscribe', function(req, res, next){
  pool.getConnection(function(err, connection){
    var sqlForDelete = "delete from members where m_id = ?;";
    connection.query(sqlForDelete, [req.user.user_id], function(err, rows){
      if(err) {console.log("delete error: " + err);}
      else{
        req.logout();
        res.redirect('/');
      }
    });
  });
});


module.exports = router;

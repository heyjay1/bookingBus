var express = require('express');
var router = express.Router();
var pool = require('./testmysql');
var passport = require('./passport.js');


//회원가입
router.get('/join', function(req, res, next) {
  res.render('join.ejs');
});

router.post('/join', function(req, res, next) {
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
  var datas = [USER_NAME, USER_NUMBER, USER_MAIL, USER_TEL, USER_SEX, USER_ID, USER_PASS];

  pool.getConnection(function(err, connection) {
    if (err)
      throw err;
    //회원가입
    var sqlForInsertMember = "INSERT INTO members(m_name, m_birth,m_mail,m_hp,m_gender,m_id, m_password) VALUES(?,?,?,?,?,?,sha2(?, 512))";
    connection.query(sqlForInsertMember, datas, function(err, rows) {
      if (err) throw err;
      res.redirect('/auth/login');
      connection.release();
    });
  });
});

//회원가입 - 아이디 중복 체크
router.get('/join/idcheck', function(req, res, next) {
  res.render('idcheck.ejs', {
    user_id: null,
    pass: null
  });
});

//아이디 중복 검사
router.post('/join/idcheck', function(req, res, next) {
  var sqlForCheckID = "SELECT COUNT(*) as result FROM members WHERE m_id = ?";
  var IDCheck = req.body.user_id;
  pool.getConnection(function(err, connection) {
    connection.query(sqlForCheckID, IDCheck, function(err, rows) {

      if (err) throw err;
      //중복아이디가 존재하는 경우
      if (rows[0].result > 0) {
        res.render('idcheck.ejs', {
          user_id: IDCheck,
          pass: false
        });
      }
      //중복 아이디가 존재하지 않는 경우
      else {
        res.render('idcheck.ejs', {
          user_id: IDCheck,
          pass: true
        });
      }
    });
  });
});

//로그인
router.get('/login', function(req, res) {
  var fmsg = req.flash();
  console.log(fmsg);

  var pass;
  if (fmsg.success) { //로그인성공
    pass = true;
  } else if (fmsg.error) { //로그인실패
    pass = false;
  } else { //최초로 로그인페이지에 접속
    pass = null;
  }
  console.log(pass);
  //userid
  var userId;
  if(req.user == null) {
    userId = null;
  } else {
    userId = req.user.user_id;
  }
<<<<<<< HEAD


  console.log("pass: ", pass, "user_id: " , userId);
=======

>>>>>>> 65cbb94f96b440ff3dc23f85217344fdd4114372
  res.render('login.ejs', {
    pass,
    user_id: userId
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true,
  successFlash: true
}));

//구글 로그인
router.get('/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login', 'email']
  }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/join' }),
  function(req, res) {
    console.log("here is google/callback");
    res.redirect('/');
  });


//로그아웃
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//회원탈퇴
router.get('/unsubscribe', function(req, res) {
  if (req.user == null)
    res.render('dropMember.ejs', {
      user_id: null
    });
  else
    res.render('dropMember.ejs', {
      user_id: req.user.user_id
    });
});

router.post('/unsubscribe', function(req, res, next) {
  pool.getConnection(function(err, connection) {
    var sqlForDelete = "delete from members where m_id = ?;";
    connection.query(sqlForDelete, [req.user.user_id], function(err, rows) {
      if (err) {
        console.log("delete error: " + err);
      } else {
        req.logout();
        res.redirect('/');
      }
    });
  });
});


module.exports = router;

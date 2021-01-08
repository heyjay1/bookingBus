var express = require('express');
var router = express.Router();
var pool = require('./testmysql');

router.get('/', function(req, res, next){
  res.render('join.ejs');
});

router.post('/', function(req, res, next){
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

  pool.getConnection(function (err, connection)
  {
    if(err)
      throw err;
    var sqlForInsertMember = "insert into members(m_name, m_address,m_mail,m_hp,m_sex,m_id, m_password) values(?,?,?,?,?,?,sha2(?, 512))";
    connection.query(sqlForInsertMember, datas, function(err, rows){
        if(err) console.error("err : " + err);
        // console.log("rows: " + JSON.stringify(rows));
        // console.log('===============================');
        // console.log('connect to mysql db');
        // console.log('===============================');
        res.redirect('/');
        connection.release();
      });
    });
});

module.exports = router;

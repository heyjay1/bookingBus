var express = require('express');
var toMyPage = express.Router();
var passport = require('passport');
var pool = require('./testmysql');

toMyPage.get('/',function(req,res){
  if(req.user == null)
    res.render('login.ejs', {user_id: null, pass:null});
  else{
    pool.getConnection(function(err, connection){
      var sqlForSelect = "select * from members where m_id = ?;";
      connection.query(sqlForSelect, [req.user.user_id], function(err, rows){
        if(err) {console.log(err);}
        else {
          for(var i=0;i <rows.length; i++)
            console.log(rows[i]);

          res.render('mypage.ejs', {user_id: req.user.user_id, rows: rows, pass:null});
          connection.release();
        }
      });
    });
  }
});

toMyPage.post('/', function(req, res, next){
  var USER_TEL = req.body.pnum;
  var USER_MAIL = req.body.email;

  pool.getConnection(function(err, connection){
    var sqlForUpdate = "update members set m_hp = ?, m_mail = ? where m_id = ?;";
    var params = [USER_TEL, USER_MAIL, req.user.user_id];
    connection.query(sqlForUpdate, params, function(err, rows){
      if(err) {console.log(err);}
      else{
        res.redirect('/mypage');
      }
    });
  });
});

module.exports = toMyPage;

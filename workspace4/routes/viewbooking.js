var express = require('express');
var toBooking = express.Router();
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

toBooking.get('/',function(req,res){
  if(req.user == null)
    res.render('login.ejs', {user_id: null});
  else{
    pool.getConnection(function(err, connection){
      var sqlForSelect = "select r.r_code rCode, date_format(r.r_date, '%Y-%m-%d (%H:%I)') as rDate, r.r_price rPrice, b.b_SP bSp, b.b_EP bEp from reservation as r join members as m on m.m_id=? join bus as b on r.b_num = b.b_num order by rDate;";
      connection.query(sqlForSelect, [req.user.user_id], function(err, rows){
        if(err) {console.log(err);}
        else {
          for(var i=0;i <rows.length; i++)
            console.log(rows[i]);

          res.render('viewbooking.ejs', {user_id: req.user.user_id, rows: rows});
          connection.release();
        }
      });
    });
  }
});

toBooking.post('/', function(req, res, next){
  var rCode = req.body.rCode;
  pool.getConnection(function(err, connection){
    var sqlForDelete = "delete from reservation where r_code = ?;";
    var params = [rCode];
    connection.query(sqlForDelete, params, function(err, rows){
      if(err) {console.log(err);}
      else{
        res.redirect('/viewbooking');
      }
    });
  });
});

module.exports = toBooking;

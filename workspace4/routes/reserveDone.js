var express = require('express');
var toReserveDone = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'project',
  password: '6124'
});

toReserveDone.post('/', function(req, res, next) {
  var cur_day = req.body.cur_day;
  var cur_time = req.body.cur_time;
  var cur_SP = req.body.cur_SP;
  var cur_EP = req.body.cur_EP;
  var cur_rank = req.body.cur_rank;
  var cur_bnum = req.body.cur_bnum;
  var cur_seat = req.body.cur_seat;
  var cur_price = req.body.cur_price;
  var cur_rSeat = req.body.cur_rSeat;

  console.log("여기는 DONE: " + cur_day, cur_time, cur_SP, cur_EP, cur_bnum, cur_rSeat, cur_price);

  pool.getConnection(function(err, connection) {
    var sql = "insert into reservation(r_date, b_num, r_price, m_num, s_num) values(?,?,?,(select m_num from members where m_id=?),?);";
    var params = [cur_day, cur_bnum, cur_price, req.user.user_id, cur_rSeat];
    connection.query(sql, params, function(err, rows) {
      res.render('reserveDone.ejs');
      connection.release();
    });
  });

  res.render('reserveDone.ejs');
});

module.exports = toReserveDone;

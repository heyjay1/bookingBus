var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');

toatt.get('/', function(req, res, next) {
  res.render('reservation.ejs');
});

toatt.post('/', function(req, res, next) {
  var cur_day = req.body.cur_day;
  var cur_time = req.body.cur_time;
  var cur_SP = req.body.cur_SP;
  var cur_EP = req.body.cur_EP;
  var cur_rank = req.body.cur_rank;
  var cur_bnum = req.body.cur_bnum;
  var cur_seat = req.body.cur_seat;

  console.log(cur_day, cur_time, cur_SP, cur_EP, cur_rank, cur_bnum, cur_seat);

  pool.getConnection(function(err, connection) {
    var sql = "select * from prices where b_num = ?;";
    connection.query(sql, cur_bnum, function(err, rows) {
      for (var i = 0; i < rows.length; i++) {
        console.log(rows[i]);
      }
      res.render('reservation.ejs', {
        rows: rows,
        cur_SP: cur_SP,
        cur_EP: cur_EP,
        cur_seat: cur_seat,
        cur_day: cur_day,
        cur_time: cur_time,
        cur_bnum: cur_bnum
      });

      connection.release();
    });
  });
});
module.exports = toatt;

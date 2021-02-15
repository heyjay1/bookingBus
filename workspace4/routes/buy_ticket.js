var express = require('express');
var buyticket = express.Router();
var pool = require('./testmysql');


buyticket.get('/', function(req, res, next) {
  res.render('buy_ticket.ejs');
});

buyticket.post('/', function(req, res, next) {
  console.log(req.body);
  var sp = req.body.TER_FR;
  var ep = req.body.TER_TO;
  var day = req.body.depr_Dt;

  var datas = [sp, ep];

  //pool.getConnection(function(err, connection) {
//  if (err) console.error("커넥션 객체 얻어오기 에러: ", err);
  //var sql = "select * from bus where b_SP=? and b_EP=?" + "select * from bus where b_SP=? and b_EP=?";

  var sql = "";
  sql += "select * from bus where b_SP=? and b_EP=?;";

  pool.query(sql, datas, function(err, rows) {
<<<<<<< HEAD
=======
    console.log(req.user.user_id);
>>>>>>> 65cbb94f96b440ff3dc23f85217344fdd4114372
    if(req.user == null)
      res.render('buy_ticket.ejs', {rows: rows, currentDay: day, user_id: null});
    else
      res.render('buy_ticket.ejs', {rows: rows, currentDay: day, user_id: req.user.user_id});
  });
  //  });

});


module.exports = buyticket;

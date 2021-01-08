var express = require('express');
var buyticket = express.Router();
var pool = require('./testmysql');


buyticket.get('/', function(req, res, next) {
  res.render('buy_ticket.ejs');
});

buyticket.post('/', function(req, res, next) {
  var sp = req.body.TER_FR;
  var ep = req.body.TER_TO;
  var day = req.body.depr_Dt;

  if (sp == 1) sp = "강릉";
  else if (sp == 2) sp = "경주";
  else if (sp == 3) sp = "포항";
  else if (sp == 4) sp = "부산";
  else if (sp == 5) sp = "서울";
  else if (sp == 6) sp = "순천";
  else if (sp == 7) sp = "공주";
  if (ep == 1) sp = "강릉";
  else if (ep == 2) ep = "경주";
  else if (ep == 3) ep = "포항";
  else if (ep == 4) ep = "부산";
  else if (ep == 5) ep = "서울";
  else if (ep == 6) ep = "순천";
  else if (ep == 7) ep = "공주";

  var datas = [sp, ep];

  //pool.getConnection(function(err, connection) {
//  if (err) console.error("커넥션 객체 얻어오기 에러: ", err);
  //var sql = "select * from bus where b_SP=? and b_EP=?" + "select * from bus where b_SP=? and b_EP=?";

  var sql = "";
  sql += "select * from bus where b_SP=? and b_EP=?;";

  pool.query(sql, datas, function(err, rows) {
    console.log('rows : ', rows);
    if(req.user == null)
      res.render('buy_ticket.ejs', {rows: rows, currentDay: day, user_id: null});
    else
      res.render('buy_ticket.ejs', {rows: rows, currentDay: day, user_id: req.user.user_id});

  //  connection.release();
  });
  //  });

});


module.exports = buyticket;

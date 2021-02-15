var express = require('express');
var toMain = express.Router();
var pool = require('./testmysql');

toMain.get('/',function(req,res,next){
pool.getConnection(function(err, connection){
  if(err) throw err;
  var region_data;
  //db에서 지역 갖고오기
  var sql = "select r_name, r_id from region;";
  connection.query(sql, function(err, rows){
    region_data = rows;
  });

    //광고노출
    var today = new Date();
    var month = today.getUTCMonth() + 1; //months from 1-12
    var day = today.getUTCDate();
    var year = today.getUTCFullYear();

    today = year + "-" + month + "-" + day;
    var sqlForSelect = "select * from region where ? between start_date and finish_date;";
    connection.query(sqlForSelect,today, function(err, rows){
      if(err) {console.log(err);}
      else {
        if(req.user == null){
            res.render('main.ejs', {user_id: null, rows:rows, region : region_data});
        }
        else
          res.render('main.ejs', {user_id: req.user.user_id, rows: rows, region : region_data});
      }
    });
  });
});
module.exports = toMain;

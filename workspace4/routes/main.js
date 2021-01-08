var express = require('express');
var toMain = express.Router();
var pool = require('./testmysql');

toMain.get('/',function(req,res,next){
pool.getConnection(function(err, connection){
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
            res.render('main.ejs', {user_id: null, rows:rows});
        }
        else
          res.render('main.ejs', {user_id: req.user.user_id, rows: rows});
      }
    });

    // var sqlForMenu = 'select r_name from region';
    // connection.query(sqlForMenu, function(err, results) {
    //   if(err) throw err;
    //   console.log(results);
    //   res.render('main.ejs', {menu: results});
    // });
  });
});
module.exports = toMain;

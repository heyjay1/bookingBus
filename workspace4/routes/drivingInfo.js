var express = require('express');
var toDrivingInfo = express.Router();
var pool = require('./testmysql');
toDrivingInfo.get('/',function(req,res){
  pool.getConnection(function(err, connection){
    var sqlForSelect = "select * from bus;";
    connection.query(sqlForSelect, function(err, rows){
      if(err) {console.log(err);}
      else {
        var b_EP = new Array();
        var b_SP = new Array();
        for(var i=0; i<rows.length; i++){
          b_EP[i] = rows[i].b_EP;
          b_SP[i] = rows[i].b_SP;
        }

        var sOption = b_EP.reduce(function(a, b){
          if(a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);
        var eOption = b_SP.reduce(function(a, b){
          if(a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);

        res.render('drivingInfo.ejs', {sOption: sOption, eOption: eOption, rows: rows});
    		connection.release();
      }
    });
  });
});

toDrivingInfo.post('/', function(req, res, next){
  var ep = req.body.sOption;
  var sp = req.body.eOption;

  pool.getConnection(function(err, connection){
    var sqlForSelect = "select * from bus where b_EP LIKE ? and b_SP LIKE ?";
    var params = [ep, sp];
    connection.query(sqlForSelect, params, function(err, rows){
      if(err) {console.log(err);}
      else {

        var b_EP = new Array();
        var b_SP = new Array();
        for(var i=0; i<rows.length; i++){
          b_EP[i] = rows[i].b_EP;
          b_SP[i] = rows[i].b_SP;
        }

        var sOption = b_EP.reduce(function(a, b){
          if(a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);
        var eOption = b_SP.reduce(function(a, b){
          if(a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);

        res.render('drivingInfo.ejs', {sOption: sOption, eOption: eOption, rows: rows});
    		connection.release();
      }
    });
  });
});

module.exports = toDrivingInfo;

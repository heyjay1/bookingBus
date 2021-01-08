var express = require('express');
var toLoction = express.Router();
var pool = require('./testmysql');

toLoction.get('/',function(req,res){
  pool.getConnection(function(err, connection){
    var sqlForSelect = "select b.b_SP as city, sum(r.s_num) as count from reservation as r right outer join bus as b on b.b_num = r.b_num group by b.b_SP;";
    connection.query(sqlForSelect, function(err, rows){
      if(err) {console.log(err);}
      else {
        for(var i=0;i <rows.length; i++)
          console.log(rows[i]);

        res.render('preferredLocation.ejs', {user_id: req.user.user_id, rows: rows});
        connection.release();
      }
    });
  });
});
module.exports = toLoction;

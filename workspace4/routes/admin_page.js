var express = require('express');
var toAdminpage = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    port:3306,
    database:'project',
    password : '6124'
});
// toAdminpage.get('/',function(req,res){
//   res.render('admin_page.ejs');
// });
toAdminpage.get('/',function(req,res){
  pool.getConnection(function(err, connection){
    var sqlForSelect = "select sum(r.r_price) as price, b.b_SP as city from reservation as r right outer join bus as b on b.b_num = r.b_num group by b.b_SP;";
    connection.query(sqlForSelect, function(err, rows){
      if(err) {console.log(err);}
      else {
        for(var i=0;i <rows.length; i++)
          console.log(rows[i]);

        res.render('admin_page.ejs', {user_id: req.user.user_id, rows: rows});
        connection.release();
      }
    });
  });
});
module.exports = toAdminpage;

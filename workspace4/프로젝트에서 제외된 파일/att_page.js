var express = require('express');
var toatt = express.Router();
var pool = require('./testmysql');

toatt.get('/:pageId', function(req, res, next) {
  pool.getConnection(function(err, connection){
    if(err) throw err;
    //db에서 지역 갖고오기
    var sql = "SELECT a.*, r.r_id FROM attraction as a JOIN region as r ON a.r_name = r.r_name WHERE r.r_id = ?;";
    connection.query(sql, [req.params.pageId], function(err, rows){
      //console.log(rows);
      res.render('att_page.ejs', {r_name: rows[0].r_name, rows: rows})
    });
    connection.release();
  });
});

module.exports = toatt;

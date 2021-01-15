var express = require('express');
var router = express.Router();
var pool = require('./testmysql');

router.get('/:detailPageId', function(req, res, next) {
  console.log(req.params.detailPageId);

  pool.getConnection(function(err, connection){
      if(err) throw err;
      //db에서 관광지 갖고오기
      var sql = "SELECT * FROM attraction WHERE a_id = ?;";
      connection.query(sql, [req.params.detailPageId], function(err, rows){
        res.render('att_detail.ejs', {a_name: rows[0].a_name, rows: rows})
      });
      connection.release();
    });
});
module.exports = router;

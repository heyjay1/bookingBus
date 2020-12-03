var express = require('express');
var toatt = express.Router();

toatt.get('/',function(req,res){
  res.render('busan_detail_dadaepo.ejs');
});
module.exports = toatt;

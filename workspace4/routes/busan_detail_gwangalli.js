var express = require('express');
var toatt = express.Router();

toatt.get('/',function(req,res){
  res.render('busan_detail_gwangalli.ejs');
});
module.exports = toatt;

var password = require('./password');
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    port : 3306,
    database:'localtestproject',
    password : password
});

module.exports = pool;

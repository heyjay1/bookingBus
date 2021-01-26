var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
var flash    = require('connect-flash');
var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toMain = require('./routes/main');

var auth = require('./routes/auth');
// var toJoin = require('./routes/join');
// var toLogin = require('./routes/login');
// var toLogout = require('./routes/logout');
// var toDropMember = require('./routes/dropMember');

var buyticket = require('./routes/buy_ticket');

// new!!
var toatt_page = require('./routes/att_page');
var toatt_detail = require('./routes/att_detail');

var course = require('./routes/course');
// var course_family = require('./routes/course_family');
// var course_friend = require('./routes/course_friend');
// var course_couple = require('./routes/course_couple');
// var course_alone = require('./routes/course_alone');

var toAdmin = require('./routes/admin_page');
var toLoction = require('./routes/preferred_location');
var toDrivingInfo = require('./routes/drivingInfo');
var toMyPage = require('./routes/mypage');
var toBooking = require('./routes/viewbooking');
var toChangePw = require('./routes/changepw');
var reservation = require('./routes/reservation');
var toReserveDone = require('./routes/reserveDone');
var pool = ('./routes/testmysql');

var app = express();

app.listen(5000, function() {
  console.log('Example app listening on port 5000!');
});

app.use(cookieSession({
  keys: ['node_yeong'],
  cookie: {
    //세션 유지 시간 1시간
    maxAge: 1000*60*60
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/script", express.static(__dirname + "/routes"));

app.use('/main',toMain);
app.use('/',toMain);

app.use('/auth', auth);
//app.use('/login',toLogin);
// app.use('/join',toJoin);
// app.use('/logout', toLogout);
// app.use('/dropMember', toDropMember);
 app.use('/buy_ticket',buyticket);

app.use('/att_page', toatt_page);
app.use('/detail', toatt_detail);

app.use('/course', course);
// app.use('/course_family',course_family);
// app.use('/course_friend',course_friend);
// app.use('/course_couple',course_couple);
// app.use('/course_alone',course_alone);

app.use('/mypage', toMyPage);
app.use('/viewbooking', toBooking);
app.use('/changepw', toChangePw);
app.use('/admin', toAdmin);
app.use('/admin/location', toLoction);
app.use('/admin/drivingInfo', toDrivingInfo);
app.use('/buy_ticket/reservation', reservation);
app.use('/reserveDone', toReserveDone);


app.use(function(req, res, next) {
  res.status(404).send('Sorry Can not find the page!');
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;

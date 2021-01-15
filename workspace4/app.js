var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash    = require('connect-flash');
var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toMain = require('./routes/main');
var toJoin = require('./routes/join');
var toLogin = require('./routes/login');
var buyticket = require('./routes/buy_ticket');

// new!!
var toatt_page = require('./routes/att_page');
var toatt_detail = require('./routes/att_detail');

// var toatt_seoul = require('./routes/att_seoul');
// var toatt_busan = require('./routes/att_busan');
// var toatt_suncheon = require('./routes/att_suncheon');
// var toatt_pohang = require('./routes/att_pohang');
// var toatt_jeonju = require('./routes/att_jeonju');
// var toatt_gangleung = require('./routes/att_gangleung');
// var toatt_gongju = require('./routes/att_gongju')

var course_family = require('./routes/course_family');
var course_friend = require('./routes/course_friend');
var course_couple = require('./routes/course_couple');
var course_alone = require('./routes/course_alone');

var busan_detail_gwangalli = require('./routes/busan_detail_gwangalli');
var busan_detail_gamchun = require('./routes/busan_detail_gamchun');
var busan_detail_dongbak = require('./routes/busan_detail_dongbak');
var busan_detail_songjung = require('./routes/busan_detail_songjung');
var busan_detail_songdo = require('./routes/busan_detail_songdo');

var busan_detail_dadaepo = require('./routes/busan_detail_dadaepo');
var gongju_detail_hanoak = require('./routes/gongju_detail_hanoak');
var gongju_detail_museum = require('./routes/gongju_detail_museum');
var gongju_detail_sangsin = require('./routes/gongju_detail_sangsin');

var jeonju_detail_keounggi = require('./routes/jeonju_detail_keounggi');

var toAdmin = require('./routes/admin_page');
var toLoction = require('./routes/preferred_location');
var toDrivingInfo = require('./routes/drivingInfo');
var toMyPage = require('./routes/mypage');
var toBooking = require('./routes/viewbooking');
var toChangePw = require('./routes/changepw');
var reservation = require('./routes/reservation');
var toLogout = require('./routes/logout');
var toDropMember = require('./routes/dropMember');
var toReserveDone = require('./routes/reserveDone');

var app = express();

var pool = ('./routes/testmysql');


app.listen(5000, function() {
  console.log('Example app listening on port 5000!');
});


// app.get('/att_page/:pageId', function(req, res, next) {
//   console.log(req.params.pageId);
//   res.render(hello);
// });


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
app.use('/login',toLogin);
app.use('/join',toJoin);
app.use('/buy_ticket',buyticket);

app.use('/att_page', toatt_page);
app.use('/detail', toatt_detail);

// app.use('/att_seoul',toatt_seoul);
// app.use('/att_busan',toatt_busan);
// app.use('/att_suncheon',toatt_suncheon);
// app.use('/att_jeonju',toatt_jeonju);
// app.use('/att_pohang',toatt_pohang);
// app.use('/att_gangleung',toatt_gangleung);
// app.use('/att_gongju',toatt_gongju);

app.use('/course_family',course_family);
app.use('/course_friend',course_friend);
app.use('/course_couple',course_couple);
app.use('/course_alone',course_alone);

app.use('/att_busan/busan_detail_gwangalli',busan_detail_gwangalli);
app.use('/att_busan/busan_detail_dadaepo',busan_detail_dadaepo);
app.use('/att_busan/busan_detail_gamchun',busan_detail_gamchun);
app.use('/att_busan/busan_detail_dongbak',busan_detail_dongbak);
app.use('/att_busan/busan_detail_songjung',busan_detail_songjung);
app.use('/att_busan/busan_detail_songdo',busan_detail_songdo);

app.use('/att_gongju/gongju_detail_hanoak',gongju_detail_hanoak);
app.use('/att_gongju/gongju_detail_museum',gongju_detail_museum);
app.use('/att_gongju/gongju_detail_sangsin',gongju_detail_sangsin);

app.use('/att_jeonju/jeonju_detail_keounggi',jeonju_detail_keounggi);

app.use('/mypage', toMyPage);
app.use('/viewbooking', toBooking);
app.use('/changepw', toChangePw);
app.use('/admin', toAdmin);
app.use('/admin/location', toLoction);
app.use('/admin/drivingInfo', toDrivingInfo);
app.use('/buy_ticket/reservation', reservation);
app.use('/logout', toLogout);
app.use('/dropMember', toDropMember);

app.use('/reserveDone', toReserveDone);



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

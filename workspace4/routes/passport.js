var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleCredentials = require('../config/google.json');
var pool = require('./testmysql');

//로그인 local strategy
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, username, password, done) {
  var params = [username, password];
  pool.getConnection(function(err, connection) {
    var sqlForLoggin = "select count(*) as count from members where m_id = ? and m_password = sha2(?, 512);";
    connection.query(sqlForLoggin, params, function(err, rows) {
      if (err) {
        return done(false, null);
      } else {
        //로그인 성공
        if (rows[0].count == 1) {
          pass = true;
          return done(null, {
            'user_id': username,
            message: 'login success'
          });
        }
        //로그인 실패
        else {
          pass = false;
          return done(null, false, {
            message: 'login failure'
          });
        }
      }
    });
  });
}));

//console.log(googleCredentials.web.client_id);

//login GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: googleCredentials.web.client_id,
    clientSecret: googleCredentials.web.client_secret,
    callbackURL: googleCredentials.web.redirect_uris[0]
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('googleCredentials');
    console.log(profile);

    var email = profile.emails[0].value;
    pool.getConnection(function(err, connection) {
      var sqlForGoogleLogin = "select count(*) as count from members where m_mail = ?";
      connection.query(sqlForGoogleLogin, email, function(err, rows) {
        if(err) {
          console.log("error!");
          return done(false, null);
        } else {
          if(rows[0] == 0) {  //register
            return done(null, false);
          } else {          //login
              pass = true;
              return done(null, {'user_id' : profile.displayName});
          }
        }
      });
    });
    // User.findOrCreate({
    //   googleId: profile.id
    // }, function(err, user) {
    //   //console.log(profile);
    //   return done(err, user);
    // });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user)
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


module.exports = passport;

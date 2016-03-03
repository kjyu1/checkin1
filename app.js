var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// Initializing Mongoose and the connection
var mongoose    = require('mongoose');
mongoose.connect('mongodb://employee:employeered@ds019268.mlab.com:19268/employees_red_wedding');

var routes = require('./routes/index');

// Array of routes to be used
var myRoutes =[
    //['/home', require('./routes/home')],
    //['/viewlog', require('./routes/viewlog')],
    ['/admin', require('./routes/admin')],
    ['/users', require('./routes/users')],
    ['/', require('./routes/index')]
];

var app = express();

// Iterating through the array and creating routes
myRoutes.forEach(function (data) {
    app.use(data[0], data[1]);
});

app.use(session({ cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var myRoutes =[
    ['/home', require('./routes/home')],
    ['/viewlog', require('./routes/viewlog')],
    ['/admin', require('./routes/admin')]
];

myRoutes.forEach(function (data) {
    app.use(data[0], data[1]);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


module.exports = app;

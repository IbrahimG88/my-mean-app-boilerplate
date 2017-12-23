/*any url is executed is passed to app.js file
*/


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');

var messageRoutes = require('./routes/messages');


/*start with app variable
*/
var app = express();
mongoose.connect('localhost:27017/sports-events');
// view engine setup
//views is views file
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//next is middleware lines
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//next line determines the static directory of the project
//public means this file is accessible from outside on the internet other
//files like bin will be accessible only by the server
app.use(express.static(path.join(__dirname, 'public')));
//end of middleware

//middleware: has headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

//usually any request is sent to the server first but by
//this middleware the request will send us back to the angular 2 part in index file
//any request moved to appRoutes :'./routes/app' imports the app.js file

//the order of the next 2 lines is important
//rule: specific routes first

//what the lines mean:
//if you get a "/message" path -> compile messageRoutes which is './messages/routes' file
app.use('/message', messageRoutes);
app.use('/', appRoutes);

// when a request is not answered this middleware is used
//index holds the angular 2 application
// catch 404 and forward to error handler
//user related routes are managed by angular
//when a route is given that results in a 404 error
//we will be returned back to index file holding our
//angular application
app.use(function (req, res, next) {
  return res.render('index');
});


module.exports = app;

var express = require('express');
var router = express.Router();

//var User = require('../models/user');

//touse mongoose:
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/node-angular');
//thats a middleware
//next for the middleware to travel on
//for next to be applied you have to call it: next()

//next get method modified
router.get('/', function (req, res, next) {
  res.render('index');
});
//res.render('node'); moved into findOne callback


//router.get('/message', function (req, res, next) {
//res.render('node');
//next is a middleware example:
//:msg is variable data
//router.get('/message/:msg', function (req, res, next) {
//we will be sent to views/node.hbs
//second argument will be a javascript variable
//params means parameters encoded in the url
//  res.render('node', {message: req.params.msg});
//});

/*
router.post('/', function(req,res,next){

    var email = req.body.email;
    var user = new User({
        firstName: 'Max',
        lastName: 'Schwarz',
        password: 'super-secret',
        email: email
    });
    //save to the database:
//user.save(); we can add a function to be called
//after saving:
    user.save();

    //I think redirect will lead to localhost:3000/ only
res.redirect('/');
//next lines for experimenting:
//router.post('/message', function(req,res,next){
//we want to divert to the previous router.get
//we may say .body as in app.js bodyparser was imported
//var message = req.body.message;
//next line redirects to the previous get route
//res.redirect('/message/' + message );
});
*/
module.exports = router;


//this file exports our router
//has only one route registered

//a get route
//hanles locallhost '/'

//app.use leads to appRoutes leading to this app.js file rendering the index file

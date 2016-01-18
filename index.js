var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// init express app
var app = express();
var routes = require('./routes.js');

// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use(express.static('app'));
app.use(express.static('lib'));

// spin up server
var server = app.listen((process.env.PORT || 3000), function() {
  var port = server.address().port;
  console.log('Listening at http://localhost:%s', port);
});

var express = require('express');
var app = express();

app.use(express.static('app'));
app.use(express.static('lib'));

var server = app.listen((process.env.PORT || 3000), function() {
  var port = server.address().port;

  console.log('Listening at http://localhost:%s', port);
});

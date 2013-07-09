var fs = require('fs');

//var index = fs.readFileSync('index.html', 'utf-8');

var index2 = fs.readFileSync('index.html');
tindex2 = index2.toString('utf-8');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(tindex2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


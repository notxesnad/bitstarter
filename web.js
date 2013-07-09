var fs = require('fs')

var index = fs.readFileSync('index.html');
var buffer = new Buffer(16);
buffer.write(index , "utf-8");
var index2 = buffer.toString("utf-8");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send( index2 );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


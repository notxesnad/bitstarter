var fs = require('fs')

var index = fs.readFileSync('index.html');
//var buffer = new Buffer(16);
//buffer.write(index);
//var index2 = buffer.toString("utf-8");
buf = new Buffer(256);
len = buf.write(index, 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));


var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(len );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


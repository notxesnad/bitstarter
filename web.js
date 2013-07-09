var fs = require('fs');

var index = fs.readFileSync('index.html', 'utf-8');

var index2 = fs.readFileSync('index.html', 'utf-8');

buf = new Buffer(28);
 buf.write(index2,0);
tindex2 = buf.toString('utf-8');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index + tindex2 );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


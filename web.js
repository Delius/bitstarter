var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var buffer = new Buffer("Hello World from index.html", 25);
var data = fs.readFileSync("index.html"), buffer.toString("utf-8"));
response.send(data);
  });


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

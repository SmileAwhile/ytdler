var express = require('express')
var app = express();

app.get('/', function(req, res) {

  res.end('hello');

}); // end get(/)

app.use(express.static('public'));

var port = process.env.PORT || 3000;
app.listen(port);

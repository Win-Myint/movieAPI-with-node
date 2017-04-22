var express = require('express');
var app     = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.send("hello world");
})

app.listen(3000, function() {
	console.log("listening to port 3000!");
})
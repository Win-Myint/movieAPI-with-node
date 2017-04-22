var express = require('express');
var app     = express();
var request = require('request');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	request('http://www.omdbapi.com/?s=breaking', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("result", {data: data});
		}
	});
});

app.listen(3000, function() {
	console.log("listening to port 3000!");
})
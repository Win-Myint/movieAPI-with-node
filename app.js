var express = require('express');
var app     = express();
var request = require('request');

app.get('/', function(req, res) {
	request('http://www.omdbapi.com/?t=breaking+bad', function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var result = JSON.parse(body);
			res.send(result);
		}
	});
});

app.listen(3000, function() {
	console.log("listening to port 3000!");
})
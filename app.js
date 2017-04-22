var express = require('express');
var app     = express();
var request = require('request');

// set view engine to ejs
app.set('view engine', 'ejs');

// root route
app.get('/', function(req, res){
	res.render('search');
})

// result route
app.get('/result', function(req, res){
	// captured user search key words in "searchTerm" variable
	var searchTerm = req.query.searchTerm;
	// concat "searchTerm" with url to omdbAPI
	var url = 'http://www.omdbapi.com/?s=' + searchTerm;
	// pass "url" variable into "request" module
	request(url, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("result", {data: data});
		}
	});
});

// set up server to listen to port 3000
app.listen(3000, function(){
	console.log("listening to port 3000!");
})
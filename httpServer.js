var express = require('express');
var http = require('http');
var path = require("path");
var app = express();
var httpServer = http.createServer(app); //create the server
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));
// read in the file and force it to be a string by adding “” at the beginning
var configtext =""+fs.readFileSync("/home/studentuser/certs/postGISConnection.js");
// now convert the configuration file into the correct format -i.e. a name/value pair array
var configarray = configtext.split(",");
var config = {};
for (var i = 0; i < configarray.length; i++) {
	var split = configarray[i].split(':');
	config[split[0].trim()] = split[1].trim();
}
var pg = require('pg');
var pool = new pg.Pool(config);

httpServer.listen(4480);

app.get('/', function (req, res) {
	// run some server-side code
	console.log("the server has received a request");
	res.send('HTTP: You Forgot the Extension!');
});

app.get('postgistest', function (req,res) {
	pool.connect(function(client,done) {
		client.query('SELECT name FROM uk_counties_subset',function(result) {
			done();
			res.status(200).send(result.rows);
});
});
});

	
app.use(express.static(__dirname));


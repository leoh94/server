var express = require('express');
var http = require('http');
var path = require("path");
var filename = req.params.fileName;
var app = express();
var httpServer = http.createServer(app); //create the server
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));

httpServer.listen(4480);

app.get('/', function (req, res) {
	// run some server-side code
	console.log("the server has received a request");
	res.send('HTTP: You Forgot the Extension!');
});

app.get('/:fileName', function (req, res) {
	// run some server-side code
	console.log(fileName + ' requested');
	// note that __dirname gives the path to the server.js file
	res.sendFile(__dirname + '/'+ fileName);
	});
	
app.use(express.static(__dirname));


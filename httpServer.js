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

httpServer.listen(4480);

app.get('/test5.html', function (req, res) {
	//run some server-side coe
	console.log('test5.html requested');
	res.send(__dirname + '/test5.html');
});


// express is the server that forms part of the nodejs program
//Adapted from: https://github.com/claieellul/cegeg077-week5server.git
var express = require('express');
var https = require('https');
var path = require('path')
var fs = require('fs');
var app = express();
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

// adding functionality to log the requests
app.use(function (req, res, next) {
	var filename = path.basename(req.url);
	var extension = path.extname(filename);
	console.log("The file " + filename + " was requested.");
	next();
});
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4443);


app.get('/', function (req, res) {
	// run some server-side code
	console.log("the server has received a request");
	res.send('HTTPS: You Forgot the Extension!');
});

app.use(express.static(__dirname));
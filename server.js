// express is the server that forms part of the nodejs program
var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4443);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get('/', function (req, res) {
	// run some server-side code
	console.log("the server has received a request");
	res.send('HTTPS: You Forgot the Extension!');
});

app.get('/:fileName', function (req, res) {
	var fileName = req.params.fileName;
	// run some server-side code
	console.log(fileName + ' requested');
	// note that __dirname gives the path to the server.js file
	res.sendFile(__dirname + '/'+ fileName);
	});

app.use(express.static(__dirname));
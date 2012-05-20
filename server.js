var express = require('express'),
	fs = require('fs'),
	app = express.createServer();

app.configure(function() {
	app.use(express.static(__dirname));
});

app.get('/', function (req, res) {
	var file = fs.readFileSync('index-dev-desktop.html');
	res.send(file, {'Content-type': 'text/html; charset=utf-8'}, 200);
});

app.get('')

app.listen(8080);
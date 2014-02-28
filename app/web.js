//require('newrelic');

var gzippo = require('gzippo');
var express = require("express");
//var logfmt = require("logfmt");
var app = express();

//app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.use("/fonts", gzippo.staticGzip(__dirname + '/fonts'));
//app.use("/images", gzippo.staticGzip(__dirname + '/images'));
app.use("/scripts", gzippo.staticGzip(__dirname + '/scripts'));
app.use("/styles", gzippo.staticGzip(__dirname + '/styles'));
app.use("/bower_components", gzippo.staticGzip(__dirname + '/bower_components'));
//app.use("/views", gzippo.staticGzip(__dirname + '/views'));

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log("Listening on " + port);
});
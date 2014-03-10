require('newrelic');

var AWS = require('aws-sdk');

var express = require("express");

//var logfmt = require("logfmt");
var app = express(),
    gzippo = require('gzippo'),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    ss = require('socket.io-stream'),
    path = require('path'),
    fs = require('fs');

//app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.use(express.bodyParser());
app.use("/fonts", gzippo.staticGzip(__dirname + '/fonts'));
app.use("/scripts", gzippo.staticGzip(__dirname + '/scripts'));
app.use("/styles", gzippo.staticGzip(__dirname + '/styles'));
app.use("/bower_components", gzippo.staticGzip(__dirname + '/bower_components'));

var port = Number(process.env.PORT || 5000);

AWS.config.update({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY });

var s3 = new AWS.S3();

server.listen(port, function() {
    console.log("Listening on " + port);
});

io.of('/upload').on('connection', function(socket) {
    console.log('client connected! YAY!');

    ss(socket).on('file', function(stream, data) {
        var buffers = [];

        stream.on('data', function(chunk) {
            buffers.push(chunk);
        });

        stream.on('end', function() {
            var params = {
                Bucket: 'getagile',
                Key: data.name,
                Body: Buffer.concat(buffers),
                ContentType: 'image/png',
                ACL: "public-read"
            };

            s3.putObject(params, function(err, data) {
                if (err)
                    console.log(err)
                else
                    console.log("Successfully uploaded to getagile/");
            });
        });
    });
});




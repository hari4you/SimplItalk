var http = require("http");
var appConfig = require("./Config");
var express = require("express");

var app = express()
var server = http.createServer(app);

require("./route")(app);
console.log(appConfig.PORT);
console.log(appConfig);
server.listen(appConfig.PORT, function(){
	console.log("Server Started!!! HURRAYY!!!");
});

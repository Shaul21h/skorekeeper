var express = require("express"),
	socket = require("socket.io");

var app = express();

app.get("/", function(req, res){
	res.send("Im here");
});

app.listen("4000", function(){
	console.log("Im listening to port no: 4000");
});

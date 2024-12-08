var http = require("http")


http.createServer(function(req,res){

	res.end("Hello World")

}).listen(1010);
console.log("Sucess to create a http server")
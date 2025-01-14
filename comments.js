// Create web server
// Run this server with node comments.js
// Open your web browser and go to http://localhost:3000/
// You should see "Hello World"
// Press Ctrl+C to stop the server

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  fs.readFile(__dirname + '/index.html', function(err, data){
    if(err){
      response.writeHead(500);
      response.end('Error loading index.html');
    }
    response.writeHead(200);
    response.end(data);
  });
});

// Listen on port 3000, IP defaults to
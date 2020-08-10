// Just required by the OS
var http = require('http');

// Here we create the basic server.
// Internally, this is running a loop that listens on a web socket
http.createServer(function (request, response) {

    // Since this is a very simple server that only responds with one
    // object, we need to tell the server to tell the browser that this
    // is JSON data coming back
    response.setHeader('Content-Type', 'application/json');

    // This must be set for CORS to work. Our website has a file for a
    // domain name, but this web server is running on 'http://localhost:8080'
    // so we have to set the CORS policy to a wildcard.
    response.setHeader('Access-Control-Allow-Origin', '*');

    // This is just how you toss things in to the body of a response.
    // We are telling it to send the object:
    // {
    //     "name": "Alex Smith",
    //     "occuptation": "Web Person",
    //     "age": 29
    // }
    // But this object must be made into a string as that's what response.end()
    // is looking for.
    response.end(JSON.stringify({
        "name": "Alex Smith",
        "occuptation": "Web Person",
        "age": 29
    }))
// Here we are telling the web server to listen on port 8080
// of the host machine. This can be any unused port on your computer.
}).listen(8080);
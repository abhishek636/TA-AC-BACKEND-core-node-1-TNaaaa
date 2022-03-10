// var http = require('http');

// http.createServer((request, response) => {
//     console.log(request,response);
// }).listen(4000, 'localhost');

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.end('Welcome');
}

server.listen(4000, () => {
    console.log('Server is listening in port 4k')
})
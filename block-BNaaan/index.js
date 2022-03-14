var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.method);
    console.log(req.headers, req.url);
    res.end('Welcome in nodejs');
};

server.listen(3000, () =>{
    console.log('server listening on port 3000');
});
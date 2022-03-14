var http = require('http');

var server = http.createServer(handelReqquest);

function handelReqquest(req,res){
   res.writeHeader(201.{'content-type': 'text/html'});
    res.end('<h1> Hello Nodejs </h1>');

};

server.listen(4444, () => {
    console.log('Welcome to Nodejs')
})
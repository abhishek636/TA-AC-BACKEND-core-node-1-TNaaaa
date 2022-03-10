console.log('Welcome to Nodejs');

var os = require('os');

console.log(os.cpus());

console.log(os.freemem());

console.log(os.uptime());

console.log(os.version());

buff1 = Buffer.alloc(12);

buff2 = Buffer.allocUnsafe(12);

buff1.toString();

var url = require('url');

const parsedUrl = url.parse("https://airindia.com/fares/calculate?from=delhi&to=detroit", true);

console.log(parsedUrl);

console.log(parsedUrl.query);

console.log(parsedUrl.pathname);

console.log(parsedUrl.protocol);
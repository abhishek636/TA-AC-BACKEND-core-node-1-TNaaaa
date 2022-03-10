console.log('Welcome to Nodejs');

var os = require('os');

var cpus = os.cpus().length;

var freeM = os.freemem();

var uptime = os.uptime();

console.log(cpus, freeM, uptime);

var {readFile, unlink} = require('fs');

buff1 = Buffer.alloc(12);

buff2 = Buffer.allocUnsafe(12);

buff1.toString();

var url = require('url');

const parsedUrl = url.parse("https://airindia.com/fares/calculate?from=delhi&to=detroit", true);

console.log(parsedUrl);

console.log(parsedUrl.query);

console.log(parsedUrl.pathname);

console.log(parsedUrl.protocol);
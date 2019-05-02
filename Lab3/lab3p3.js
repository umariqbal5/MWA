// • Create a web server that's going to send a response of big file (bigger
// then 200MB) to any client that sends a request to your specified
// server:port.
// • Solve this question in many different ways and inspect the loading
// time in the browser and send many requests at the same time to
// observe performance differences, write down your observations
// • Using readFileSync
// • Using readFile
// • Using streams

const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text'});
    const file = fs.readFileSync(__dirname + '/lab3p1.js','utf8');
    res.write(file);
    res.write('loading..');
    res.end();
}).listen(1337, ()=> console.log('127.0.0.1:1337'));


//READ FILE ASYNC
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text'});
    fs.readFile(__dirname + '/lab3p3.js','utf8',function (err,data) {
        res.end(data);
    });
    res.write('loading..');

}).listen(8181,()=>console.log('127.0.0.1:8181'))



//USE STREAMS
http.createServer(function(req,res){
    const file = fs.createReadStream(__dirname+ '/lab3p3.js').pipe(res);
}).listen(8282,()=>console.log('127.0.0.1:8282'));







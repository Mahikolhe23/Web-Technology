var http = require('http');
// var dt = require('./mydate');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write("The date and time : " +dt.mydate());
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
    // res.write(req.url);
    // res.end('Hello World!');
    res.end();
}).listen(3000);
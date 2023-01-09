var http = require('http');
var fs = require('fs');

// http.createServer(function (req, res) {
//     fs.readFile('file1.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

// fs.appendFile('file1.txt', 'Hello Content!', function (err) {
//     if (err) throw err;
//     console.log('Saved');
// });

// fs.open('file2','w',function(err,file){
//     if(err) throw err;
//     console.log('Saved');
// });

// fs.appendFile('file1.txt', 'hello again from mahi', function (err) {
//     if (err) throw err;
//     console.log('update');
// });

// fs.writeFile('file1.txt','hey  how are you this msg is send from mahi',function(err){
//     if(err) throw err;
//     console.log('replaced');
// });

// fs.unlink('file1.txt', function (err) {
//     if (err) throw err;
//     console.log("file deleted");
// });
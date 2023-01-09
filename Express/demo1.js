const express = require('express');
const app = express();

// routes functin 
app.get('/', function (req, resp) {
    resp.send("<h1> In / url header </h1>");
});
app.get('/home', function (req, resp) {
    resp.send("<h1> In Home section </h1>");
});
app.get('/about', function (req, resp) {
    resp.send("<h1>About Us</h1>");
})
app.listen(3000);
console.log("Server is running in port 3000");


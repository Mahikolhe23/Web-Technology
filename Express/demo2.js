const express = require('express');
const app = express();

//routes the url to specific path
app.get('/', function (req, resp) {
    resp.send("<h1>This is default page</h1>");
});
app.get('/home', function (req, resp) {
    resp.sendFile("public/home.html", { root: __dirname });
});
app.get('/about', function (req, resp) {
    resp.sendFile("public/about.html", { root: __dirname });
});
app.listen(3000);
console.log("Server is running on port 3000");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/form', function (req, resp) {
    resp.sendFile('/public/form.html', { root: __dirname });
});

app.get('/form_sub',urlencodedParser)
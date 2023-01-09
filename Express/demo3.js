const express = require('express');
const app = express();
app.use(express.static('public'));
//get req accept
app.get('/form', function (req, resp) {
    resp.sendFile('public/form.html', { root: __dirname });
});
app.get('/form_sub', function (req, resp) {
    r1 = {
        first_name: req.query.fn,
        last_name: req.query.ln
    };
    console.log(r1);
    resp.end(JSON.stringify(r1));
});
app.listen(3000);
console.log("running");

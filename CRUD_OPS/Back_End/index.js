//import all req modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//express obj
const app = express();

//middleware for express
app.use(cors());
app.use(bodyParser.json());

//create obj of mysql
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'newuser',
    password: 'Root@123',
    database: 'crud'
});

// default get req api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to IACSD</h1>");
});

//get all data from db
app.get("/student/get", (req, res) => {
    con.query("select* from student", (err, result) => {
        if (err) {
            console.log("--------err in query--------");
            console.log(err);
        } else
            res.send(result);
    })
})

//get student by id
app.get('/student/:id', (req, res) => {
    let stdid = req.params.id;
    const query = `select* from student where id=${stdid}`
    con.query(query, (err, result) => {
        if (err) {
            console.log("---------err in query-----------");
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

//add user to database
app.post("/adduser", (req, res) => {
    let user = req.body;
    let query = `insert into student values(${user.firstname},${user.lastname},${user.email},${user.password},${user.id})`
    con.query(query, (err, result) => {
        if (err) {
            console.log("---------err in query-----------");
            console.log(err);
        } else
            res.send(result);
    })
})

//update user data
app.put("/update/:id", (req, res) => {
    let stdid = req.params.id;
    let item = req.body;

})






//start server
app.listen((3000), () => {
    console.log("server is running on 3000");
});



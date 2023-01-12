//import from react lib
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//import from sql.js connection
const SQLConnect = require("./sql");

// express obj
const app = express();

//middleware for express
app.use(bodyParser.json());
app.use(cors());

//default home page get request
app.get("/", (req, res) => {
    res.send("<h1>welcome to home page</h1>");
});

//get data from database ans send to this url
app.get("/student/data", (req, res) => {
    //fire querry to database with the help of connection obj
    SQLConnect.query("select* from student", (err, result) => {
        if (err) {
            console.log("--------errr from db-------");
            console.log(err);
        } else {
            res.send(result);
        }
    })
})


app.listen((4000), () => {
    console.log("running on 4000");
})
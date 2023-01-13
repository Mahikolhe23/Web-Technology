const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "newuser1",
    password: "Root@123",
    port: "3306",
    database: "demo"
});
const con = connection.connect((err) => {
    if (err) {
        console.log("-------not connected to sql--------");
        console.log(err);
        console.log("-------not connected to sql--------");
    } else {
        console.log("Connected to DB");
    }
});
module.exports = connection;
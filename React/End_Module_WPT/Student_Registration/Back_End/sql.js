const mysql = require("mysql");

const connection = mysql.createConnection({
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root123",
    PORT: "3307",
    database: "wpt"
});
const con = connection.connect((err) => {
    if (err) {
        console.log("-------err not connect to sql--------");
        console.log(err);
    } else {
        console.log("Connected to DB");
    }
});
module.exports = connection;
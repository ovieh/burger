// Set up MySQL connection.
const mysql = require("mysql");
require('dotenv').config({path: '../.env'})



const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "burgers_db"
});

// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

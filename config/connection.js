// Set up MySQL connection.
const mysql = require("mysql");
//require('dotenv').config();



const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Jaxon17",
  database: "burgers_db"
});

// console.log(process.env.DB_PASS);

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

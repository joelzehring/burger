var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  user: "root",
  password: "Zeph#317",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.log("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

module.exports = connection;
const { database } = require("./keys");
const mysql = require("mysql");

const connection = mysql.createConnection(database);

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;

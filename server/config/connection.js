let mysql = require('mysql');

//database connexion
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true
});

connection.connect();

// connection.end();

module.exports = connection;

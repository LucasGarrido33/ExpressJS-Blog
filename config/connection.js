let mysql = require('mysql');

//database connexion
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

// connection.end();

module.exports = connection;

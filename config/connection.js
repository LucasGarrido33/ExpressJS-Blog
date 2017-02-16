let mysql = require('mysql');

//database connexion 
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sa4lu2',
  database: 'honey_dev'

});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

module.exports = connection;


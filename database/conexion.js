const mysql = require('mysql');

const dbhost = "159.223.182.177";
const dbusuario = "sipro_development";
const dbpassword = "U1m8ma9@2";
const db = "sipro_development";

const connection = mysql.createConnection({
  host: dbhost,
  user: dbusuario,
  password: dbpassword,
  database: db
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

module.exports = connection;

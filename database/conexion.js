const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "159.223.182.177",
  user: "sipro_development",
  password: "U1m8ma9@2",
  database: "sipro_development",
  port: 3306,
});

module.exports = connection;

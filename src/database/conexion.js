// Importa el módulo 'mysql2/promise' para interactuar con MySQL utilizando promesas
const mysql = require("mysql2/promise");

// Crea un pool de conexiones utilizando la biblioteca mysql2/promise
const connection = mysql.createPool({
  // Especifica la dirección IP del servidor de la base de datos
  host: "159.223.182.177",
  // Especifica el nombre de usuario para conectarse a la base de datos
  user: "sipro_development",
  // Especifica la contraseña del usuario para la conexión a la base de datos
  password: "U1m8ma9@2",
  // Especifica el nombre de la base de datos a la que se va a conectar
  database: "sipro_development",
  // Especifica el puerto a través del cual se realizará la conexión (por defecto, el puerto de MySQL es 3306)
  port: 3306,
});

// Exporta el pool de conexiones para que pueda ser utilizado en otros archivos
module.exports = connection;
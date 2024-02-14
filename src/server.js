// Importa los módulos necesarios para crear una aplicación Express
const express = require('express');
const body = require('body-parser');
const cors = require('cors');

// Importa las rutas definidas en el archivo './routes/routes.users'
const userRoutes = require("./routes/user.routes");

// Crea una instancia de la aplicación Express
const app = express();

// Especifica el puerto en el cual la aplicación Express escuchará las solicitudes
const port = 8080;

// Configura el uso de middleware para la aplicación

// Habilita CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Habilita el manejo de datos en formato JSON en las solicitudes
app.use(express.json());

// Configura el middleware de 'body-parser' para manejar datos codificados en la URL y JSON
app.use(body.json({ limit: "50mb", extended: true }));
app.use(body.urlencoded({ limit: "50mb", extended: true }));

// Configura nuevamente el middleware de 'express.json()' (duplicado, podría eliminarse)
app.use(express.json());

// Configura headers CORS en la respuesta para permitir ciertos métodos y encabezados
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Configura las rutas definidas en 'userRoutes' para la aplicación
app.use(userRoutes);

// Inicia el servidor Express y escucha las solicitudes en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

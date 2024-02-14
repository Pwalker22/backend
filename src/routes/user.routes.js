// Importa el módulo 'express' para la creación de rutas
const express = require('express');

// Crea una instancia de la clase Router de Express
const User = express.Router();

// Importa el controlador 'ApController' desde el archivo "../controller/controller.users"
const ApController = require("../controller/controller.users");

// Define las rutas y sus respectivas funciones del controlador

// Ruta GET para obtener todos los usuarios
User.get("/user", ApController.allUser)

    // Ruta POST para agregar un nuevo usuario
    .post("/insertUser", ApController.addUser)

    // Ruta PUT para actualizar la información de un usuario específico
    .put("/updateUser/:userId", ApController.updateUser)

    // Ruta PATCH para marcar como eliminado a un usuario específico
    .patch("/deleteUser/:userId", ApController.deleteUser);

User.get("/userConsult/:userId", ApController.consultUser);

// Exporta el módulo 'User' que contiene las rutas configuradas
module.exports = User;

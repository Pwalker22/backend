const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require("../controller/controller.users");

router.get('/allUser',controller.obtenerUsuarios);

router.post('/insertUser', controller.agregarUsuario);

router.put('/updateUser/:id',controller.actualizarUsuario);

router.patch('/deleteUser/:id',controller.actualizarestado);

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const connection = require("../database/conexion");
const usuariosController = {};

usuariosController.obtenerUsuarios = (req, res) => {
  const user = connection.query('SELECT * FROM usuario ORDER BY 1 DESC LIMIT', (err, result) => {
    if (err) throw err;
    res.json(result);
  });

  console.log(user);
};


usuariosController.agregarUsuario = (req, res) => {
  const nuevoUsuario = req.body;
  connection.query('INSERT INTO usuarios SET ?', nuevoUsuario, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario agregado correctamente' });
  });
};

usuariosController.actualizarUsuario = (req, res) => {
  const userId = req.params.id;
  const datosActualizados = req.body;
  connection.query('UPDATE usuarios SET ? WHERE id = ?', [datosActualizados, userId], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario actualizado correctamente' });
  });
};


usuariosController.actualizarestado= (req, res) => {
  const userId = req.params.id;
 
  db.query('UPDATE usuarios SET estado = estado +  1 WHERE id = ? AND estado >=  0', userId, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error al actualizar el estado del usuario', error: err });
    } else {
      
      if (result.affectedRows ===  0) {
        res.json({ message: 'El usuario ya no tiene más actividades permitidas' });
      } else {
        res.json({ message: 'Actividad del usuario registrada con éxito' });
      }
    }
  });
};
module.exports = usuariosController;

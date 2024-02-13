const express = require('express');
const body = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/routes.users')
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(body.json({ limit: "50mb", extended: true }));
app.use(body.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

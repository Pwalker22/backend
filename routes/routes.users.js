const express = require('express');
const User = express.Router();

const ApController = require("../controller/controller.users");

User.get("/user", ApController.allUser)
    .post("/insertUser", ApController.addUser)
    .put("/updateUser/:userId", ApController.updateUser)
    .patch("/deleteUser/:userId", ApController.deleteUser);

module.exports = User;

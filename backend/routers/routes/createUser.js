const express = require('express');


const createUserRouter = express.Router();

const {createNewUser} = require("../controllers/createNewUser")

createUserRouter.post("/createUser",createNewUser);

module.exports = createUserRouter;

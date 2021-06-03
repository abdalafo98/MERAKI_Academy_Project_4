const express = require('express');


const createProductRouter = express.Router();

const {createProduct} = require("../controllers/createProduct")

createProductRouter.post("/products",createProduct);

module.exports = createProductRouter;

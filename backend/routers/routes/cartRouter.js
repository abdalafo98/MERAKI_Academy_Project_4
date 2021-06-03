const express = require('express');

const cartRouter = express.Router();

const {addToCart,getProduct}  = require("../controllers/cart")


cartRouter.post("/:id",addToCart)
cartRouter.get("/:id",getProduct)

module.exports = cartRouter;
const express = require('express');

const cartRouter = express.Router();

const {addToCart,getProduct}  = require("../controllers/cart")
const authentication = require("../../routers/middlewares/authentication")


cartRouter.post("/",authentication,addToCart)
cartRouter.get("/",authentication,getProduct)

module.exports = cartRouter;
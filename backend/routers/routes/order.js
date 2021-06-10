const express = require("express");
const orderRouter = express.Router();
const { createOrder, getUserOrder } = require("../controllers/order");
const authentication = require("../../routers/middlewares/authentication");

orderRouter.post("/", authentication, createOrder);
orderRouter.get("/",authentication, getUserOrder)


module.exports = orderRouter;
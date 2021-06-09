const express = require("express");
const orderRouter = express.Router();
const { createOrder } = require("../controllers/order");
const authentication = require("../../routers/middlewares/authentication");
orderRouter.post("/", authentication, createOrder);
module.exports = orderRouter;
const express = require('express');


const createRatingRouter = express.Router();

const {createRating,getRating} = require("../controllers/rating")
const authentication = require("../../routers/middlewares/authentication")

createRatingRouter.post("/products/:id",authentication,createRating);
createRatingRouter.get("/products/:id",getRating)

module.exports = createRatingRouter;

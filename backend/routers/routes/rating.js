const express = require('express');


const createRatingRouter = express.Router();

const {createRating} = require("../controllers/rating")
const authentication = require("../../routers/middlewares/authentication")

createRatingRouter.post("/products/:id/rating",authentication,createRating);

module.exports = createRatingRouter;

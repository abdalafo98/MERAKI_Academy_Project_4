const express = require('express');

const favoritesRouter = express.Router();

const {addToFavorites,getFavorites}  = require("../controllers/favorites")
const authentication = require("../../routers/middlewares/authentication")

favoritesRouter.post("/",authentication,addToFavorites)
favoritesRouter.get("/",authentication,getFavorites)


module.exports = favoritesRouter;
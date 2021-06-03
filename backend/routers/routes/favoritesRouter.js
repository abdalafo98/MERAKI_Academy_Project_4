const express = require('express');

const favoritesRouter = express.Router();

const {addToFavorites}  = require("../controllers/favorites")


favoritesRouter.post("/:id",addToFavorites)


module.exports = favoritesRouter;
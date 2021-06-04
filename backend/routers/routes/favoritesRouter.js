const express = require("express");

const favoritesRouter = express.Router();

const {
  addToFavorites,
  getFavorites,
  deleteProduct,
} = require("../controllers/favorites");
const authentication = require("../../routers/middlewares/authentication");

favoritesRouter.post("/", authentication, addToFavorites);
favoritesRouter.get("/", authentication, getFavorites);
favoritesRouter.delete("/", authentication, deleteProduct);

module.exports = favoritesRouter;

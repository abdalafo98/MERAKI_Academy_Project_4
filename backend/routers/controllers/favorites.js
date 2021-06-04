const favoritesModel = require("../../db/models/favorite");

const addToFavorites = (req, res) => {
  const userId = req.token.userId;
  const { productId } = req.body;
  favoritesModel
    .updateOne({ user: userId }, { $push: { products: productId } })
    .then((result) => {
      res.status(201).json("product has been added");
    })
    .catch((err) => {
      res.send(err);
    });
};

const getFavorites = (req, res) => {
  const userId = req.token.userId;
  favoritesModel
    .findOne({ user: userId })
    .populate("products")
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteProduct = (req, res) => {
  const userId = req.token.userId;
  const { productId } = req.body;
  favoritesModel
    .updateOne({ user: userId }, { $pull: { products: productId } })
    .then((result) => {
      res.status(200).json("product has been deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  addToFavorites,
  getFavorites,
  deleteProduct,
};

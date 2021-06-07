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
      res.status(200).json(result.products);
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

const getIfItInFav = (req, res) => {
  const userId = req.token.userId;
  const productId = req.params.productId;
  favoritesModel.findOne({ user: userId }).then((result) => {
    const arr = result.products;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (productId == arr[i]) {
        res.status(200).json("found");
        return
      } 
    }
    res.status(200).json("not found")
  });
};

module.exports = {
  addToFavorites,
  getFavorites,
  deleteProduct,
  getIfItInFav,
};

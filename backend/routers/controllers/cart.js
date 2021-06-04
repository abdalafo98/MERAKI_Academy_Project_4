const cartModel = require("../../db/models/cart");

const addToCart = (req, res) => {
  const userId = req.token.userId;
  const { productId } = req.body;
  cartModel
    .updateOne({ user: userId }, { $push: { products: productId } })
    .then((result) => {
      res.status(201).json("product has been added");
    })
    .catch((err) => {
      res.send(err);
    });
};

const getProduct = (req, res) => {
  const userId = req.token.userId;
  cartModel
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
  cartModel
    .updateOne({ user: userId }, { $pull: { products: productId } })
    .then((result) => {
      res.status(200).json("product has been deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  addToCart,
  getProduct,
  deleteProduct,
};

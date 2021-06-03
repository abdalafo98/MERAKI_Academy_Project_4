const productModel = require("../../db/models/products");

const createProduct = (req, res) => {
  const { type, name, price, img, description, quantity } = req.body;
  const newProduct = new productModel({ type, name, price, img, description, quantity })
  newProduct.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createProduct,
};

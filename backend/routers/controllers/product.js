const productModel = require("../../db/models/products");

const getAllProducts = (req, res) => {
  productModel
    .find({})
    .populate("comment")
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
///////////////////////////
const createProduct = (req, res) => {
  const { type, name, price, img, description, quantity } = req.body;
  const newProduct = new productModel({
    type,
    name,
    price,
    img,
    description,
    quantity,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
///////////////
const getProductById = (req, res) => {
  const _id = req.params.id;
  productModel
    .findOne({ _id })
    .populate({
      path: "comment",
      populate: { path: "commenter" },
    })
    .populate("rating")
    .exec()
    .then((result) => {
      //   populate([{
      //     path: 'comment',
      //     model: 'Comments'
      // }, {
      //     path: 'commenter',
      //     model: 'Comments'
      // }])
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json("not found");
    });
};
////////////
const getProductByType = (req, res) => {
  const type = req.params.type;
  productModel
    .find({ type })
    .populate("rating")
    .exec()
    .then((result) => {
      if (result.length === 0) {
        res.status(404).json("not found");
        return;
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json("not found");
    });
};

///////////////
const updateProductById = (req, res) => {
  const _id = req.params.id;
  // const { type, name, price, img, description, quantity } = req.body;
  productModel
    .findByIdAndUpdate(_id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json("not found");
    });
};

const deleteProductById = (req, res) => {
  const _id = req.params.id;
  productModel
    .findOneAndDelete({ _id })
    .then((result) => {
      if (!result) {
        res.status(404).json("not found");
        return;
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json("not found");
    });
};

const getProductByName = (req, res) => {
  const name = req.params.name;
  productModel
    .find({ name })
    .then((result) => {
      if (result.length === 0) {
        res.status(404).json("not found");
        return;
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json("not found");
    });
};

const getProductByPrice = (req, res) => {
  const price = req.params.price;
  const type = req.params.type;
  productModel
    .find({ $and: [{ type: type }, { price: { $lt: price } }] })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  getProductByType,
  updateProductById,
  deleteProductById,
  getProductByName,
  getProductByPrice,
};

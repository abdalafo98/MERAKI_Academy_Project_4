const ratingModel = require("../../db/models/rating");
const productModel = require("../../db/models/products");

const createRating = (req, res) => {
  const rating = req.body.rating;
  const id = req.params.id;
  const user = req.token.userId;
  const newRating = new ratingModel({ rating, user });
  newRating
    .save()
    .then(async (result) => {
      await productModel.updateOne(
        { _id: id },
        { $push: { rating: result._id } }
      );
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createRating,
};

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
      const product = await productModel.findOne({ _id: id });
      const newNum = product.totalRating + 1;
      const newAverage =
        (product.averageRating * product.totalRating + rating) / newNum;
      await productModel.updateOne(
        { _id: id },
        {
          $push: { rating: result._id },
          averageRating: newAverage,
          totalRating: newNum,
        }
      );
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getRating = (req, res) => {
  const id = req.params.id;
  productModel
    .findOne({ _id: id })
    .populate("rating")
    .then((result) => {
      const arrayOfRating = result.rating;
      const totalRating = arrayOfRating.reduce((accumulator, element, i) => {
        return accumulator + element.rating;
      }, 0);
      const averageRating = totalRating / arrayOfRating.length;
      res.status(200).json(averageRating);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createRating,
  getRating,
};

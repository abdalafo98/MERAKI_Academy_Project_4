const orderModel = require("../../db/models/order");




const createOrder = (req, res) => {
  const user = req.token.userId;
  const { totalPrice, date, products } = req.body;
  const newOrder = new orderModel({ totalPrice, date, products, user });
  newOrder
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUserOrder = (req,res)=>{
  const user = req.token.userId;
  orderModel.find({user})
  .populate({
    path: "products",
    populate: { path: "product" },
  }).then((result)=>{
    res.send(result)
  }).catch((err) => {
    res.send(err);
  });
}




module.exports = {
  createOrder,getUserOrder
};
const mongoose = require("mongoose");
const order = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "Users" },
  date: { type: String },
  products: [
    {
      product: { type: mongoose.Schema.ObjectId, ref: "Products" },
      Quantity: { type: Number },
      price: { type: Number },
    },
  ],
  totalPrice: { type: Number },
});
module.exports = mongoose.model("Order", order);
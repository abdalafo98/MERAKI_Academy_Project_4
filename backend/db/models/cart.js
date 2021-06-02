const mongoose = require("mongoose");

const cart = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "Users" },
  products: [{ type: mongoose.Schema.ObjectId, ref: "Products" }],
});

module.exports = mongoose.model("Cart", cart);

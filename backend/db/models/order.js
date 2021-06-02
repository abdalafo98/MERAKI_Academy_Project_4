const mongoose = require("mongoose");

const order = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "Users" },
  date: { type: Date },
  products: [{ type: mongoose.Schema.ObjectId, ref: "Products" }],
});

module.exports = mongoose.model("Order", order);

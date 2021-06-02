const mongoose = require("mongoose");

const purchased = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.ObjectId, ref: "Order" }],
});

module.exports = mongoose.model("Purchased", purchased);

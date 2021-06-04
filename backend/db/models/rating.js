const mongoose = require("mongoose");

const rating = new mongoose.Schema({
  rating: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

module.exports = mongoose.model("Rating", rating);

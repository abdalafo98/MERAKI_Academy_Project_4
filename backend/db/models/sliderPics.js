const mongoose = require("mongoose");

const slider = new mongoose.Schema({
  picsAddress: [{ type:String }],
  logo:{type:String}
});

module.exports = mongoose.model("Slider", slider);

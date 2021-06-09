const sliderModel = require("./../../db/models/sliderPics");
const newSliderPics = (req, res) => {
  const { picsAddress, logo } = req.body;
  const newPic = new sliderModel({ picsAddress, logo });

  newPic
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getSliderPics = (req, res) => {
  sliderModel
    .findOne({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  newSliderPics,
  getSliderPics,
};

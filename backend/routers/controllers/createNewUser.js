const usersModel = require("../../db/models/user");

const createNewUser = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    country,
    phoneNumber,
    email,
    password,
    role,
  } = req.body;

  const user = new usersModel({
    firstName,
    lastName,
    age,
    gender,
    country,
    phoneNumber,
    email,
    password,
    role,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createNewUser,
};

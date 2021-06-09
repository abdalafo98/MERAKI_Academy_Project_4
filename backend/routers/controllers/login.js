const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email }).populate("role");
    if (!user) {
      res.status(404);
      res.json({ message: "The email doesn't exist", status: 404 });
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      const payload = {
        userId: user._id,
      };

      const options = {
        expiresIn: "100h",
      };

      const token = jwt.sign(payload, process.env.SECRET, options);
      res.status(200);
      res.json({ token });
      return;
    }
    res.status(403);
    res.json({
      message: "The password you’ve entered is incorrect",
      status: 403,
    });
    return;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = {
  login,
};

const express = require("express");

const userRouter = express.Router();

const {
  createNewUser,
  getUserInformation,
  updateUserInformation,
} = require("../controllers/user");
const authentication = require("../../routers/middlewares/authentication");

userRouter.post("/createUser", createNewUser);
userRouter.get("/id", authentication, getUserInformation);
userRouter.put("/editUser", authentication, updateUserInformation);
// userRouter.update("/",createNewUser);
// userRouter.put("/",createNewUser);

module.exports = userRouter;

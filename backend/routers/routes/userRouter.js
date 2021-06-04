const express = require('express');


const userRouter = express.Router();

const {createNewUser,getUserInformation,updateUserInformation} = require("../controllers/user")

userRouter.post("/createUser",createNewUser);
userRouter.get("/id/:id",getUserInformation);
userRouter.put("/:id",updateUserInformation);
// userRouter.update("/",createNewUser);
// userRouter.put("/",createNewUser);


module.exports = userRouter;

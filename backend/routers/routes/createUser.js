const express = require('express');


const userRouter = express.Router();

const {createNewUser,getUserInformation} = require("../controllers/createNewUser")

userRouter.post("/createUser",createNewUser);
userRouter.get("/id/:id",getUserInformation);
// userRouter.delete("/",createNewUser);
// userRouter.update("/",createNewUser);
// userRouter.put("/",createNewUser);


module.exports = userRouter;

const express = require('express');


const createNewCommentRouter = express.Router();

const {createComment} = require("../controllers/createComment")
const authentication = require("../../routers/middlewares/authentication")

createNewCommentRouter.post("/products/:id/comments",authentication,createComment);

module.exports = createNewCommentRouter;
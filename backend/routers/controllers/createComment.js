const commentModel = require("../../db/models/comments");
const productModel = require("../../db/models/products")


const createComment = (req, res) => {
  const {comment} = req.body
  const id = req.params.id
  const commenter = req.token.userId
  const newComment = new commentModel({comment,commenter})
  newComment.save().then(async (result)=>{
    await productModel.updateOne(
        { _id: id }, 
        { $push: { comment: result._id } }
    );
    res.status(201)
    res.json(result)
  }).catch((err) => {
      res.send(err);
    });
};
module.exports = {
    createComment,
};
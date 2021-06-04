const cartModel = require("../../db/models/cart");

const addToCart  =async (req,res)=>{
    const userId = req.token.userId
    const {productId} = req.body
    await cartModel.updateOne(
        { user: userId }, 
        { $push: { products: productId } }
        )
        cartModel.findOne({ user: userId }).populate("products").exec().then((result)=>{
            res.status(201).json(result)
        }).catch((err) => {
            res.send(err);
        });
}

const getProduct = (req,res)=>{
    const userId = req.token.userId
    cartModel.findOne({ user: userId }).populate("products").exec().then((result)=>{
        res.status(200).json(result)
    }).catch((err) => {
        res.send(err);
    });
}
module.exports = {
    addToCart,getProduct
}

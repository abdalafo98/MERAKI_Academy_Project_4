const cartModel = require("../../db/models/cart");

const addToCart  =async (req,res)=>{
    const userId = req.params.id
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
    const userId = req.params.id
    cartModel.findOne({ user: userId }).populate("products").exec().then((result)=>{
        res.status(201).json(result)
    }).catch((err) => {
        res.send(err);
    });
}
module.exports = {
    addToCart,getProduct
}

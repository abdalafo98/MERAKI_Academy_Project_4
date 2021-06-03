const favoritesModel = require("../../db/models/favorite");

const addToFavorites  =async (req,res)=>{
    const userId = req.params.id
    const {productId} = req.body
    await favoritesModel.updateOne(
        { user: userId }, 
        { $push: { products: productId } }
        )
        favoritesModel.findOne({ user: userId }).populate("products").exec().then((result)=>{
            res.status(201).json(result)
        }).catch((err) => {
            res.send(err);
        });
}


module.exports = {
    addToFavorites
}

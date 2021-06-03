const express = require('express');


const productsRouter = express.Router();

const {getAllProducts, createProduct,getProductById,getProductByType,updateProductById,deleteProductById} = require("../controllers/product")

productsRouter.get("/",getAllProducts);
productsRouter.post("/",createProduct);
productsRouter.get("/id/:id",getProductById)
productsRouter.get("/type/:type",getProductByType)
productsRouter.put("/id/:id",updateProductById)
productsRouter.delete("/id/:id",deleteProductById)




module.exports = productsRouter;

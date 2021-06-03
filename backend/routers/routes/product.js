const express = require('express');


const productsRouter = express.Router();

const {getAllProducts, createProduct,getProductById,getProductByType,updateProductById,deleteProductById,getProductByName,getProductByPrice} = require("../controllers/product")

productsRouter.get("/",getAllProducts);
productsRouter.post("/",createProduct);
productsRouter.get("/id/:id",getProductById)
productsRouter.get("/type/:type",getProductByType)
productsRouter.put("/id/:id",updateProductById)
productsRouter.delete("/id/:id",deleteProductById)
productsRouter.get("/name/:name",getProductByName)
productsRouter.get("/:type/:price",getProductByPrice)




module.exports = productsRouter;

const express=require('express');

// controllers
const {newSliderPics,getSliderPics}=require('./../controllers/sliderPics');
const sliderRouter=express.Router();
sliderRouter.post('/',newSliderPics);
sliderRouter.get("/",getSliderPics)
module.exports=sliderRouter;







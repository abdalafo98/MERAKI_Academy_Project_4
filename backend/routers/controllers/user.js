const usersModel = require("../../db/models/user");
const favoriteModel =  require("../../db/models/favorite");
const cartModel =  require("../../db/models/cart");

const createNewUser = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    country,
    phoneNumber,
    email,
    password,
    role,
  } = req.body;

  const user = new usersModel({
    firstName,
    lastName,
    age,
    gender,
    country,
    phoneNumber,
    email,
    password,
    role,
  });

  user
    .save()
    .then(async (result) => {
const fav =  new favoriteModel({
  user: result._id
})
 const aaaaa = await fav.save()

 const cart = new cartModel({
  user: result._id
 })
 const bbbbb = await cart.save()

      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUserInformation =(req,res)=>{

  const _id =req.token.userId;
  usersModel.findOne({_id}).then((result)=>{
    
    res.status(200).json(result);
    
  })
  .catch((err) => {
    res.status(404).json("not found");
  });
  
}

const updateUserInformation= (req,res)=>{
  
  const _id =req.params.id;
  usersModel.findOneAndUpdate({_id},req.body,{new:true})
  .then((result)=>{
    res.status(200).json(result);
  })
  .catch((err)=>{
    res.status(404).json("not found");
  })

}

module.exports = {
  createNewUser,getUserInformation,updateUserInformation
};

const mongoose = require("mongoose");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

// connecting mongoose
mongoose
  .connect(
    "mongodb://user:user@cluster0-shard-00-00.fo3dv.mongodb.net:27017,cluster0-shard-00-01.fo3dv.mongodb.net:27017,cluster0-shard-00-02.fo3dv.mongodb.net:27017/weBuy?ssl=true&replicaSet=atlas-11mxv2-shard-0&authSource=admin&retryWrites=true&w=majority",
    options
  )
  .then(
    () => {
      console.log("DB Ready To Use");
    },
    (err) => {
      console.log(err);
    }
  );

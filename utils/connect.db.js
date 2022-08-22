const mongoose = require("mongoose");
//connect to mongodb

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("MongoDb connect");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;

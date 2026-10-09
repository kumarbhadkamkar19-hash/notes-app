const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Mongo db connection loosmotion${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`Mongo db connect : ${conn.connection.host}`);
//   } catch (error) {
//     console.log(`Mongo db connection faild ${error.message}`);
//     process.exit(1);
//   }
// };
// module.exports = connectDB;

// const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// require("dotenv").config();

// const client = mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("DB connected");
//   })
//   .catch((error) => {
//     console.log("Error: ", error);

//     return error;
//   });

// module.exports = client;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // It's a good practice to include this option
    });
    console.log("DB connected");
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB; // Export the connectDB function

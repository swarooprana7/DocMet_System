const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/conn"); // Import the connectDB function
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRouter"); // Ensure the correct route file name

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB(); // Call the connectDB function to establish the database connection

// Routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

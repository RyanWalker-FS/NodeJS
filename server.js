require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const connectDB = require("./app/db/config");
connectDB();
console.log("MongoDB connection status:", mongoose.connection.readyState);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/*Resubmission fixes
 - Corrected connection to MongoDB 
 - fixed issue where Postman and Compass were not communicating.
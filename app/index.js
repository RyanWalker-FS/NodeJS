const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 30000,
});
module.exports = app;

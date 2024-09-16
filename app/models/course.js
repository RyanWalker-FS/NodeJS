const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("course", CourseSchema);

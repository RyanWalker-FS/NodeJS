const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = require("./Course");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      validate: {
        validator: async (value) => {
          const course = await Course.findById(value);
          return course !== null;
        },
        message: "course not found",
      },
    },
  ],
});
studentSchema.virtual("courseTitle").get(function () {
  return this.courses.map((course) => course.title);
});
module.exports = mongoose.model("Student", studentSchema);

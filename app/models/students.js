const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
        validator: (value) => {
          return Course.findOne({ _id: value });
        },
        message: "Student must have at least one course",
      },
    },
  ],
});
module.exports = mongoose.model("Student", studentSchema);

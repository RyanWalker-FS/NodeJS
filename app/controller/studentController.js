const Student = require("../models/students.js");
const Course = require("../models/Course");
exports.getAllStudents = async (req, res) => {
  try {
    const select = req.query.select;
    const sort = req.query.sort;
    const students = await Student.find().select(select).sort(sort).populate({
      path: "courses",
      select: "name age email",
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId).populate({
      path: "courses",
      select: "-version",
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStudent = async (req, res) => {
  const student = new Student(req.body);
  try {
    const courseId = req.body.courses;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: messages.courseNotFound });
    }
    const student = new Student({ ...req.body, courses: course._id });
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent)
      return res.status(404).json({ message: "Student not found" });
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.json(deletedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const express = require("express");
const router = express.Router();
const studentRoutes = require("./studentRoutes");
const courseRoutes = require("./courseRoutes");
router.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} -  Request made` });
});

router.use("/students", studentRoutes);

module.exports = router;

const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });
  res.json({ msg: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  console.log(JWT_SECRET);

  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email and pass",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const respone = await Course.find({});
  res.json({
    courses: respone,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const course = await Course.findOne({ _id: req.params.courseId });
    const updateUser = User.findOneAndUpdate(
      {
        username: req.username,
      },
      {
        $push: {
          purchasedCourses: course,
        },
      }
    );
    res.json({ msg: "Course purchased succesfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({ username: req.user });
    await user.populate("purchasedCourses");
    res.json({ purchasedCourses: user.purchasedCourses });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;

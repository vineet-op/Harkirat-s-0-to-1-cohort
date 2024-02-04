const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const router = express.Router();
const { JWT_SECRET } = require("../config");

const SignupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async function (req, res) {
  const { success } = SignupSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect Input",
    });
  }

  const existingUser = User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email Already taken",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const UserId = user._id;

  const token = jwt.sign({ UserId }, JWT_SECRET);

  res.json({
    message: "User created succesfully",
    token: token,
  });
});

const SigninSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async function (req, res) {
  const { success } = SigninSchema.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect username or password",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign({ UserId: user._id }, JWT_SECRET);

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error While logging in",
  });
});

module.exports = router;

const express = require("express");
const zod = require("zod");
const { User, Account } = require("../db");
const router = express.Router();
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");
const jwt = require("jsonwebtoken");

//*SignUp
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

  const existingUser = await User.findOne({
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

  /// ----- Create new account ------

  await Account.create({
    UserId,
    balance: 1 + Math.random() * 10000,
  });

  /// -----  ------

  const token = jwt.sign({ UserId }, JWT_SECRET);

  res.json({
    message: "User created succesfully",
    token: token,
  });
});

//*SignIn
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

    res.json({ token: token });
    return;
  }

  res.status(411).json({
    message: "Error While logging in",
  });
});

//*Updating Passwords
const updatedBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async function (req, res) {
  const { success } = updatedBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({ message: "Error while updating the information" });
  }

  await User.findOne(req.body, {
    _id: req.UserId,
  });

  res.json({
    message: "Updated successfully",
  });
});

//* Retriving filtered users name
router.put("/bulk", async function (req, res) {
  const filter = req.query.filter || " ";

  const users = await find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;

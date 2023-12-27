const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://userappnew:18Td2lQG6HwWKsDI@cluster0.z1slqsr.mongodb.net/"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Vineet Jadhav",
  email: "ytfjynbt@exa.com",
  password: "123456789",
});

user.save();

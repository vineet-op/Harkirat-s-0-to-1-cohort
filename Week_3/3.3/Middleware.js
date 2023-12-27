const express = require("express");
const app = express();

//*Defining Middleware
function AgeMid(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.status(411).json({ msg: "You are underAge" });
  }
}

app.get("/ride-1", AgeMid, function (req, res) {
  res.json({
    msg: "You have ride Ride 1",
  });
});

app.get("/ride-2", AgeMid, function (req, res) {
  res.json({
    msg: "You have ride Ride 1",
  });
});

app.listen(3000);

const express = require("express");

//ugly solution of auth DRY Principle

const app = express();
const port = 3000;
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyID = req.query.kidneyID;

  if (username === "vineet" || password === "pass") {
    if (kidneyID == 1 || kidneyID == 2) {
      res.json({
        msg: "Your kidney is fine",
      });
    }
  }

  res.status(400).json({ msg: "Something wrong " });
});

app.listen(port);

//Input validation

const express = require("express");
const app = express();
const z = require("zod");

const schema = z.array(z.number());

// {
//     email: string,
//     password: string,
//     country: IN, US
// }

// const schema1 = z.object({
//   email: z.string(),
//   password: z.string(),
//   country: z.literal("IN").or(z.literal("US")),
//   kidneys: z.array(z.number()),
// });

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  res.json({
    response,
  });
});

// //Global catches
// app.use(function (err, req, res, next) {
//   res.status(500).json({
//     msg: "Error 404",
//   });
// });
app.listen(3000);

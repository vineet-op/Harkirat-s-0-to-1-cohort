const { JWT_SECRET } = require("../backend/config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(411).json({ message: "Error in token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.UserId = decoded.UserId;

    next();
  } catch (err) {
    return res.status(403).json({});
  }
};

module.exports = { authMiddleware };

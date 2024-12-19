const jwt = require("jsonwebtoken");
const secret = "BlogManagementSystem@2024-2025";

const setUser = (user) => {
  const payload = { id: user._id, email: user.email };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

const getUser = (token) => {
  if (!token) return null;
  return jwt.verify(token, secret);
};

module.exports = { setUser, getUser };

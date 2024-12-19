const User = require("../models/user");
const { setUser } = require("../services/auth");

const login = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }
  const token = setUser(user);
  return res.status(200).json({
    user,
    token,
  });
};

module.exports = {
  login,
};

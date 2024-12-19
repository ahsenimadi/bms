const { getUser } = require("../services/auth");

const restrictToLogged = (req, res, next) => {
  const userUid = req.headers["authorization"];
  if (!userUid) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const token = userUid.split("Bearer ")[1];
  const user = getUser(token);
  req.user = user;
  next();
};

module.exports = { restrictToLogged };

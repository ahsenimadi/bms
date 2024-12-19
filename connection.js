const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectMongoDB = (db) => {
  return mongoose.connect(db);
};

module.exports = {
  connectMongoDB,
};

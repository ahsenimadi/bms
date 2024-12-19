const User = require("../models/user");

const getUser = async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
};
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.status(200).json(user);
};
const createUser = async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    password: body.password,
  });
  return res.status(201).json({ msg: "Success" });
};
const editUser = async (req, res) => {
  const body = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    password: body.password,
  });
  return res.status(201).json({ msg: "Success" });
};
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(201).json({ msg: "Success" });
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};

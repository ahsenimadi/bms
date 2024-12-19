const express = require("express");

const {
  getUser,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/user");

const router = express.Router();

router.get("/:id", getUserById);

router.post("", createUser);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

module.exports = router;

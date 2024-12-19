const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const {
  getAllBlogs,
  getBlogs,
  createBlog,
  editBlog,
  deleteBlog,
} = require("../controllers/blog");

router.get("/", getAllBlogs);

router.get("/:id", getBlogs);

router.post("/blogs", upload.single("image"), createBlog);

router.patch("/:id", upload.single("image"), editBlog);

router.delete("/deleteBlog", deleteBlog);

module.exports = router;

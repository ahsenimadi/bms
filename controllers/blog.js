const User = require("../models/blog");

// Get all blogs
const getAllBlogs = async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({
    message: "Success",
    users: users,
  });
};

// Get single blog by ID
const getBlogs = async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.status(200).json({
    message: "Success",
    user: user,
  });
};

// Create a new blog with image upload
const createBlog = async (req, res) => {
  try {
    const body = req.body;
    const image = req.file ? req.file.filename : null; // Uploaded image filename

    if (!body.name || !body.description || !image) {
      return res
        .status(400)
        .json({ message: "All fields, including image, are required" });
    }

    // Create new blog
    await User.create({
      name: body.name,
      description: body.description,
      image: image, // Save image filename
    });

    return res.status(201).json({
      message: "Success",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Edit a blog and update image if provided
const editBlog = async (req, res) => {
  try {
    const body = req.body;
    const image = req.file ? req.file.filename : null; // Uploaded image filename

    const updateData = {
      name: body.name,
      description: body.description,
    };

    // If a new image is uploaded, include it in the update
    if (image) {
      updateData.image = image;
    }

    // Update the blog
    await User.findByIdAndUpdate(req.params.id, updateData);

    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: "Success",
  });
};

module.exports = {
  getAllBlogs,
  getBlogs,
  createBlog,
  editBlog,
  deleteBlog,
};

const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const blogRouter = require("./routes/blog");
const { log } = require("./middlewares/index");
const { restrictToLogged } = require("./middlewares/auth");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

connectMongoDB("mongodb://localhost:27017/project-01").then(() =>
  console.log("MongoDB connected")
);

app.use(bodyParser.json());

// Ensure middleware is loaded first
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(log("logs.txt"));

// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/blogs", restrictToLogged, blogRouter);

// Preflight OPTIONS response for all routes
app.options("*", cors());

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));

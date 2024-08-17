const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const mongoose = require("mongoose");
const cors = require("cors");
const user_routes = require("./routes/user-routes");
const ConnectDB = require("./config/db");
const log_routes = require("./routes/log-routes");
const port = process.env.PORT || 5000;
const app = express();

//config
dotenv.config();

//database connection
ConnectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", user_routes);
app.use("/api/v1/", log_routes);

const upload = require("./middlewares/upload");

// app.use(express.static('public'))
app.use("/uploads", express.static("public/uploads"));

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.post("/images", upload.single("photo"), (req, res) => {
  console.log(req.filename);
  res.json(req.filename);
});

app.post("/videos", upload.single("video"), (req, res) => {
  res.json(req.file);
});

app.use("/", (req, res) => {
  res.send("<h1>Server is working</h1>");
});

app.listen(port, () => {
  console.log(
    `Server is running at port :http://localhost:${port}`.cyan.underline.bold
  );
});

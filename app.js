const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const locationRouter = require("./route/location.router.js");
const ImageRouter = require("./route/image.router.js");
app.use(
  cors({
    origin: "localhost:8000",
  })
);

app.use(express.json());
app.use(locationRouter);
app.use(ImageRouter);
app.use(express.static(path.join(__dirname, "client")));

module.exports = app;

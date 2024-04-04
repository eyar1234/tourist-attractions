const express = require("express");
const ImageRouter = express.Router();
const ImageData = require("./image.controller.js");

ImageRouter.post("/image", ImageData);

module.exports = ImageRouter;

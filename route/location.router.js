const express = require("express");
const locationData = require("./location.controller.js");
const locationRouter = express.Router();

locationRouter.post("/location", locationData);

module.exports = locationRouter;

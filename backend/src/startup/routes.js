const express = require("express");
const cors = require("cors");

const devRouter = require("../routes/devRouter");
const searchRouter = require("../routes/searchRouter");

module.exports = function(app) {
  app.use(cors());
  app.use(express.json());
  app.use("/", devRouter);
  app.use("/", searchRouter);
};

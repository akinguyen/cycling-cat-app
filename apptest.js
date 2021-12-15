const express = require("express");
const apptest = express();

apptest.use((req, res, next) => {
  res.status(200).json({
    message: "It works",
  });
});
module.exports = apptest;

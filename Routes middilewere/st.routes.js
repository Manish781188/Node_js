const express = require("express");
const stRouter = express.Router();

stRouter.get("/stget", (req, res,next) => {
  console.log("student get data");

  res.send("student get data");
  
});
stRouter.get("/stadd", (req, res) => {
  console.log("students add data");
  res.send("students add data");
});

module.exports = { stRouter };
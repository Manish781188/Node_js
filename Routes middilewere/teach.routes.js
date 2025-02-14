const express = require("express")
const techRouter = express.Router();

techRouter.get("/techget", (req, res) => {
    console.log("teacher get data");
    res.send("teacher get data");
  });
  
techRouter.get("/techadd", (req, res) => {
console.log("teacher add data");
res.send("teacher add data");
});

module.exports = {techRouter}
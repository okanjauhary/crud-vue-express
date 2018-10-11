const express = require("express"),
  path = require("path"),
  route = express.Router();

route.get("/members", (req, res) => {
  res.send("OK");
});

module.exports = route;

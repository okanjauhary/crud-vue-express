const express = require("express"),
  path = require("path"),
  route = express.Router();

route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../index.html"));
});

module.exports = route;

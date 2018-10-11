const express = require("express"),
  mongoose = require("mongoose"),
  route = express.Router(),
  Member = require("./../models/member");

route.get("/members", (req, res) => {
  Member.find({})
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
});

route.post("/members", (req, res) => {
  let member = new Member({ ...req.body, _id: new mongoose.Types.ObjectId() });
  member.save().then(result => {
    res.status(200).send(result);
  });
});

route.put("/members/:id", (req, res) => {
  Member.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    result => {
      res.send(result);
    }
  );
});

route.delete("/members/:id", (req, res) => {
  Member.findOneAndRemove({ _id: req.params.id }).then(result => {
    res.send(result);
  });
});

module.exports = route;

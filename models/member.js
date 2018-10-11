const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false,
    default: null
  }
});

const Member = mongoose.model("members", MemberSchema);

module.exports = Member;

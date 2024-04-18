const mongoose = require("mongoose");
const { string } = require("prop-types");

const scoresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  password: {
    type: String,
    required: "This field is required",
  },
  scores: {
    type: Array,
  },
  total: {
    type: Number,
    required: "This field is required",
  },
  thru: {
    type: Number,
    required: "This field is required",
  },
});

module.exports = mongoose.model("Scores", scoresSchema);

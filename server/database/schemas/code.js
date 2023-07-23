const mongoose = require("mongoose");
const codeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: String,
    default: null,
  },
  percentage: {
    type: Number,
    min: 0,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Code = mongoose.model("code", codeSchema);

module.exports = Code;

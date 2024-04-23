const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100M",
  },
});

// create a new collection

const userList = mongoose.model("ecommerce_operations", userModel);

module.exports = userList;

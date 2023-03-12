const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require('uuidv1');
const { use } = require("../app");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

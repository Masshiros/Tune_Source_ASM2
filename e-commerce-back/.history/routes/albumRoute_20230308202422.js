const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require('uuidv1');


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


module.exports = mongoose.model("User",userSchema);

const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const albumSchema = new mongoose.Schema(
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

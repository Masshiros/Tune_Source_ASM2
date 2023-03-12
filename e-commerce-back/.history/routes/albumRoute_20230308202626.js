const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const albumSchema = new mongoose.Schema(
  {
    album_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    album_description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    album_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

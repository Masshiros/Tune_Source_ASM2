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
      required: true,
      maxlength: 200,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    genre_id: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    artist: {
      type: String,
      trim: true,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", userSchema);

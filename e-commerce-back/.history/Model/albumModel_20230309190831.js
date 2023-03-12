const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const albumSchema = new mongoose.Schema(
  {
    albumName: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    albumDescription: {
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
    genreId: {
      type: ObjectId,
      ref: "Genre",
      required: true,
    },
    artist: {
      type: String,
      trim: true,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", albumSchema);

const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Album = require("../Model/albumModel");
const { errorHandler } = require("../helpers/dbErrorHandler");

// get user information when they log in the website
exports.createNewAlbum = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: err,
      });
    }

    // check for all fields
    const { albumName, albumDescription, price, genreId, artist, releaseDate } =
      fields;
    if (
      !albumName ||
      !albumDescription ||
      !price ||
      !genreId ||
      !artist ||
      !releaseDate
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }
    let album = new Album(fields);
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      album.photo.data = fs.readFileSync(files.photo.filepath); // change path to filepath
      album.photo.contentType = files.photo.mimetype; // change typt to mimetype
    }
    try {
      await album.save();
      res.json({
        album,
      });
    } catch (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
  });
};
exports.getAlbumByID = async (req, res, next, id) => {
  try {
    const album = await Album.findById(id);
    if (!album) {
      return res.status(400).json({
        error: "Album not found",
      });
    }
    req.album = album;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err,
    });
  }
};
// just get album information excepted for the photo
exports.readAlbum = async (req, res) => {
  req.album.photo = undefined;
  return res.json({
    data: req.album,
  });
};
// remove album
exports.removeAlbum = async (req, res) => {
  try {
    let deletedAlbum = req.album;
    await deletedAlbum.remove();
    return res.json({
      message: "Delete successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
// UPDATE
exports.updateAlbum = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: err,
      });
    }

    // check for all fields
    const { albumName, albumDescription, price, genreId, artist, releaseDate } =
      fields;
    if (
      !albumName ||
      !albumDescription ||
      !price ||
      !genreId ||
      !artist ||
      !releaseDate
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }
    let album = req.album;
    // overwrite properties of album by properties of fields
    album = _.extend(album, fields);

    // check file photo size (<=1MB)
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      album.photo.data = fs.readFileSync(files.photo.filepath); // change path to filepath
      album.photo.contentType = files.photo.mimetype; // change type to mimetype
    }
    try {
      await album.save();
      res.json({
        album,
      });
    } catch (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
  });
};

/**
 * SELL / ARRIVAL
 * query by sold /album?sortBy=sold&order=desc&limit=4
 * query by arrival /album?sortBy=createAt&order=desc&limit=4
 * if no query are sent , all the products are return
 */

exports.listAlbum = async (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? req.query.limit : 6;
  try {
    let albumList = await Album.find()
      .select("-photo")
      .populate("genreId")
      .sort([[sortBy, order]])
      .limit(limit);
  } catch (err) {
    return res.status(400).json({
      error: "Products not found"
    })
  }
};

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
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  try {
    let albumList = await Album.find({})
      .select("-photo")
      .populate("genreId")
      .sort([[sortBy, order]])
      .limit(limit);
    res.json(albumList);
  } catch (err) {
    return res.status(400).json({
      error: "Products not found",
    });
  }
};
// related album list
/**
 * find the album based on its genre
 *
 */
exports.listRelatedAlbum = async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  try {
    // find album with _id not include current product + genreId equals to genreId of current product
    let relatedAlbumList = await Album.find({
      _id: { $ne: req.album },
      genreId: req.album.genreId,
    })
      .limit(limit)
      .populate("genreId", "_id name");

    res.json(relatedAlbumList);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "Products not found",
    });
  }
};
//get all genres of current album in database
exports.listGenreOfAlbum = async (req, res) => {
  try {
    let genres = await Album.distinct("genreId", {});
    res.json(genres);
  } catch (err) {
    res.status(400).json({
      error: "genre not found",
    });
  }
};
exports.listBySearch = async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  // other filters like price , genreId , artist
  let findArgs = {};

  // console.log(order, sortBy, limit, skip, req.body.filters);
  // console.log("findArgs", findArgs);

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        // gte -  greater than price [0-10]
        // lte - less than
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }
  try {
    let data = await Album.find(findArgs)
      .select("-photo")
      .populate("genreId")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit);
    res.json({
      size: data.length,
      data,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Albums not found",
    });
  }
};
exports.getPhoto = async(req,res) => {
  
}

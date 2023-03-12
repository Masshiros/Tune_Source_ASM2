const Genre = require("../Model/genreModel");
const { errorHandler } = require("../helpers/dbErrorHandler");

// get user information when they log in the website
exports.createNewGenre = async (req, res) => {
  const newGenre = new Genre(req.body);
  try {
    await newGenre.save();
    res.json({
      data: newGenre,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
exports.getGenreByID = async (req, res, next, id) => {
  try {
    const genre = await Genre.findById(id);
    req.genre = genre;
    if (!genre) {
      return res.status(400).json({
        error: "Genre does not exist",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
  next();
};
exports.readGenre = async (req, res) => {
  return res.json({
    data: req.genre,
  });
};
exports.updateGenre = async (req, res) => {
  const currentGenre = req.genre;
  currentGenre.name = req.body.name;
  try {
    await currentGenre.save();
    res.json({
      message: "Update genre successfully"
      data: currentGenre,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
exports.removeGenre = async (req, res) => {
  try {
    let deletedGenre = req.genre;
    await deletedGenre.remove();
    return res.json({
      message: "Delete genre successfully",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};
exports.listGenre = async (req, res) => {
  try {
    let genreList = await Genre.find();
    return res.json({
      data: genreList,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};

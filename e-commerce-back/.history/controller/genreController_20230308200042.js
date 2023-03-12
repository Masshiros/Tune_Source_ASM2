const Genre = require("../Model/genreModel");
const { errorHandler } = require("../helpers/dbErrorHandler");
// get user information when they log in the website
exports.create = async (req, res) => {
  const newGenre = new Genre(req.body);
  try {
    await Genre.save();
    res.json({
      data: newGenre,
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler(err),
    });
  }
};

const Genre = require("../Model/genreModel");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
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

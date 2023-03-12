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
exports.getGenreByID = async (req,res,next,id) => {
  try{

    const genre = await Genre.findById(id);
    return res.json({
      data: genre
    })
  }catch(err){

  }

}

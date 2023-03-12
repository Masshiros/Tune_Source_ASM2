const Genre = require("../Model/genreModel");
// get user information when they log in the website
exports.create = async (req,res) => 
    const newGenre = new Genre(req.body);
    try{
        await Genre.save();
    }
]

const User = require("../Model/userModel");

exports.getUserByID = async (req, res, next, id) => {
  const user = await User.findById(id)
  if (err || !user) {
    return res.status(400).json({
      error: "User not found",
    });
  }
    req.profile = user;
    next();
  
};

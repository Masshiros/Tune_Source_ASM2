const User = require("../Model/userModel");

exports.getUserByID = async (req, res, next, id) => {
  const user = await User.findById(id).exec((err, user) => {
  
    req.profile = user;
    next();
  });
};

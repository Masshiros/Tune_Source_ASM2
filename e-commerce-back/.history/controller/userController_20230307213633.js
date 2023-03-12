const User = require("../Model/userModel");

exports.getUserByID = async (req, res, next, id) => {
  const user = await User.findById(id)
  
    req.profile = user;
    next();
  });
};

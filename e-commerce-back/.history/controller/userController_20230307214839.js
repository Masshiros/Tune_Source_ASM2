const User = require("../Model/userModel");

exports.getUserByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    user.halt = undefined;
    user.hashed_password = undefined;
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};

const User = require("../Model/userModel");
// get user information when they log in the website
exports.getUserByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};
exports.readUser = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};
exports.updateUser = async (req, res) => {
  try {
    let currentUser = await User.findOneAndUpdate(
      { _id: req.profile._id },
      { $set: req.body },
      { $new: true }
    );
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
  } catch (err) {
    return res.status(400).json({
      error: "You are not authorized to perform this action",
    });
  }
};

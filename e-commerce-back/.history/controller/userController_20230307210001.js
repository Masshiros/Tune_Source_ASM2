const User = require("../Model/userModel");
const jwt = require("jsonwebtoken"); // generate signed token
const expressJWT = require("express-jwt"); // authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    user.halt = undefined;
    user.hashed_password = undefined;
    res.json({
      user,
    });
  } catch (err) {
    res.status(400).json({
      error: errorHandler(err),
    });
  }
};
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  // 1) check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user || !user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password don't match",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    console.log(token);

    res.cookie("jwt", token, { expire: new Date() + 5 * 60 * 1000 });

    const { _id, name, email, role } = user;

    return res.json({
      token,
      user: { _id, name, email, role },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      err,
      error: "User with that email does not exist. Please sign up",
    });
  }
};

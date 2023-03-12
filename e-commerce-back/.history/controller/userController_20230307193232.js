const User = require('../Model/userModel');
const {errorHandler} = require('../helpers/dbErrorHandler');
exports.signup = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.json({
        user
      });
    } catch (err) {
      res.status(400).json({
        error: errorHandler(err)
      });
    }
  };

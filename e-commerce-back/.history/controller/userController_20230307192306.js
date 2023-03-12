const User = require('../Model/userModel');
exports.signup = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.json({
        user
      });
    } catch (err) {
      res.status(400).json({
        error: err.message
      });
    }
  };

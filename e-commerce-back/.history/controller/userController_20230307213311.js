const User = require("../Model/userModel");

exports.getUserByID = async( req,res, next ,id) => {
    User.findById(id).exec*
}
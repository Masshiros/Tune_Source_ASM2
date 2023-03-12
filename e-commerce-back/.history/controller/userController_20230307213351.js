const User = require("../Model/userModel");

exports.getUserByID = async( req,res, next ,id) => {
    User.findById(id).exec((err,user)=> {
        if(err || !user){
            return res.status(400).json({
                error: 'User not found'
            })
        }
    })
}
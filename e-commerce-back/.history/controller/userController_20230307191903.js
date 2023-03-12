const User = require('../Model/userModel');
exports.signup = async (req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        res.json({
            user
        });
    }
   
    
}

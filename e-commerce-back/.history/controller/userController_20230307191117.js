const User = require('../Model/userModel');
exports.signup = async (req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        
    }
    catch(err){
        return res.status(400).json({
            err
        })
    }
    
}

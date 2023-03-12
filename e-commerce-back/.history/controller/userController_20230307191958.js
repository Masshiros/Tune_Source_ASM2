const User = require('../Model/userModel');
exports.signup = async (req,res)=>{
    const user = new User(req.body);
   
        await user.save();
        res.json({
            user
        });
}catch(err){
    return res.status(400).json({
        err
    })
}

exports.userSignupValidator = (req,res) => {
    req.check('name','Name is required');
}
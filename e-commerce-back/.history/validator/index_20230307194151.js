exports.userSignupValidator = (req,res) => {
    req.check('name','Name is required').notEmpty();
    req.check('name','Email must be between 3 to 32 characters').matches(/.+\@.+\..+/).w
}
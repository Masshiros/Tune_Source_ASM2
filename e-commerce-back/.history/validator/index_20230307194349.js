exports.userSignupValidator = (req, res) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .withMessage("Email must contain @")
    .isLength({
      min: 4,
      max: 32,
    });
req.check("password","Password is required").notEmpty();
req.check('password').isLength()
};

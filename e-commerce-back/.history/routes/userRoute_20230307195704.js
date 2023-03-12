const express = require('express');
const router = express.Router();
const { signup}  = require('../Controller/userController');
const { userSignupValidator} = require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', userSignupValidator, signup);
module.exports = router;
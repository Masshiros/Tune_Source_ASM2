const express = require('express');
const router = express.Router();
const { signup, signin}  = require('../Controller/userController');
const { userSignupValidator} = require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.post('/signin', signin);
module.exports = router;
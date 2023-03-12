const express = require('express');
const router = express.Router();
const { signup, signin, signout, requireSignin}  = require('../Controller/userController');
const { userSignupValidator} = require('../validator');

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/test',)
module.exports = router;
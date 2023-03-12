const express = require('express');
const router = express.Router();
const { signup}  = require('../Controller/userController');
const { userSignupValidator} = require('../validator')

router.post('/signup', signup);
module.exports = router;
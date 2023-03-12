const express = require('express');
const router = express.Router();
const { signup}  = require('../Controller/userController');

router.ge('/signup', signup);
module.exports = router;
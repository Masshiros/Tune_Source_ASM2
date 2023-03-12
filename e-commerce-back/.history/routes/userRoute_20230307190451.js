const express = require('express');
const router = express.Router();
const { signup}  = require('../Controller/userController');

router.post('/signup', signup);
module.exports = router;
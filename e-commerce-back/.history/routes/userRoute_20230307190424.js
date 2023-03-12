const express = require('express');
const router = express.Router();
const {} = require('../Controller/userController');

router.get('/signup',userController.sayHi);
module.exports = router;
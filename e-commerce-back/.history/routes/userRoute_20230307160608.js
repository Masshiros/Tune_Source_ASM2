const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');

router.get('/',(req,res)=>{
    res.send('hello from user');
})
module.exports = router;
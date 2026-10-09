const express = require('express');
const router = express.Router();
const {register,login,checkUser} = require('../controller/userController')


//auth middleware
const authMiddleware = require('../middleWare/authMiddleware')


router.post("/register",register);

//login routes

router.post('/login',login)

//check routes

router.get("/check",authMiddleware,checkUser)

module.exports = router;
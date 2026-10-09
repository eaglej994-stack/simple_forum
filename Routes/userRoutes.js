const express = require('express');
const router = express.Router();
const {register,login,checkUser} = require('../controller/userController')


router.post("/register",register);

//login routes

router.post('/login',login)

//check routes

router.get("/check",checkUser)

module.exports = router;
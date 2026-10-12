const express = require("express");
const router = express.Router();

const {
    register,
    login,
    checkUser
} = require("../controller/userController");

const authMiddleware = require("../middleWare/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/check", authMiddleware, checkUser);

module.exports = router;
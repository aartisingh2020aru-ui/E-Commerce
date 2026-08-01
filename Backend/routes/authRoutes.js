const express = require("express");
const router = express.Router();

const{
    register,
    login,
    logout,
} = require("../controllers/authControllers");

// Register User
router.post("/register", register);

// Login User
// router.post("/login",login);

// Logout User
// router.post("/logout", logout);

module.exports = router;
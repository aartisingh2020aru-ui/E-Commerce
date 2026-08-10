const express = require("express");
const router = express.Router();

const{
    register,
    login,
    logout,
    testController

} = require("../controllers/authControllers");
const { requireSignIn , isAdmin } = require("../middleware/authMiddleware");

// Register User
router.post("/register", register);

// Login User
router.post("/login",login);

// Logout User
router.post("/logout", logout);

// test controller
router.get("/test", requireSignIn, isAdmin, testController)

module.exports = router;
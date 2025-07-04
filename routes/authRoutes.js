const express = require("express");
const router = express.Router();

const { handleUserSignup, handleUserLogin, handleUserMe, handleUserLogout } = require("./../controllers/authController");

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/me", handleUserMe);
router.post("/logout", handleUserLogout);

module.exports = router;
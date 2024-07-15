const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", userController.signup); //working
router.post("/login", userController.login); //working

router.post("/validateToken", authMiddleware, userController.validateToken); //working

module.exports = router;

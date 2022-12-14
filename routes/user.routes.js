const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { body } = require("express-validator");

router.post("/signup", body("email").isEmail(), userController.signup);
router.post("/signin",body("email").isEmail(),userController.signin);

module.exports = router;

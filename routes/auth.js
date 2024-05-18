const express = require("express");
const router = express.Router();
const {authController} = require("../controllers");
const {signupValidator}= require("../validators/auth");
const validate = require("../validators/validate");

router.post("/signup", signupValidator, validate, authController.signup);
module.exports= router; 
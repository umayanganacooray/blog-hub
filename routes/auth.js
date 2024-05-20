const express = require("express");
const router = express.Router();
const {authController} = require("../controllers");
const {signupValidator, signinValidator, emailValidator, verifyUserValidator}= require("../validators/auth");
const validate = require("../validators/validate");

router.post("/signup", signupValidator, validate, authController.signup);

router.post("/signin", signinValidator,validate, authController.signin);

router.post("/send-verification-email", emailValidator, validate, authController.verifyCode);

router.post("/verify-user", verifyUserValidator, validate, authController.verifyUser);

router.post("/forgot-password-code", emailValidator, validate,  authController.forgotPasswordCode);

module.exports= router; 
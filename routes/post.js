const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const { postController } = require("../controllers");
const {
  addPostValidator,
} = require("../validators/post");
const validate = require("../validators/validate");

router.post("/", isAuth, addPostValidator, validate, postController.addPost);

module.exports = router;





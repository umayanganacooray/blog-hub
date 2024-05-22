const express = require("express"); 
const router = express.Router();
const {categoryController} = require("../controllers");
const {addCategoryValidator} = require("../validators/category");
const validate = require("../validators/validate");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", isAuth, isAdmin, addCategoryValidator, validate, categoryController.addCategory);

module.exports = router; 
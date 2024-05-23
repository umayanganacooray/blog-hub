const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const {fileController} = require("../controllers");
const upload = require("../middlewares/upload");

router.post("/upload", isAuth,upload.array("image",3), fileController.uploadFile);

module.exports = router;
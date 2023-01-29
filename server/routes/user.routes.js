const express = require("express");
const { createUser, userLogin } = require("../controller/user.controller");
const router = express.Router();

router.post("/user/login", userLogin);
router.post("/user/create", createUser);

module.exports = router;

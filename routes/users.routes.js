const express = require("express");

const { createAcount, loginUser } = require("../controllers/users.controllers");

const router = express.Router();

router.post("/register", createAcount);
router.post("/login", loginUser);

module.exports = router;

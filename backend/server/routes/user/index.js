const express = require("express");
const router = express.Router();
const { auth } = require('../../middleware');

const post = require("./post");
const put = require("./put");

// Register new user
router.post("/", post);
router.put("/", auth, put);

module.exports = router;

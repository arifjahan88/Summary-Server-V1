const express = require("express");
const { getuser } = require("../controllers/login");
const router = express.Router();

router.get("/", getuser);

module.exports = router;

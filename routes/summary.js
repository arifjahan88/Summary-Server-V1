const express = require("express");
const { createSummary } = require("../controllers/createsummary");
const { getSummary } = require("../controllers/getsummary");
const router = express.Router();

router.post("/addsummary", createSummary);
router.get("/getsummary", getSummary);

module.exports = router;

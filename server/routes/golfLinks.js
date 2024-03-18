const express = require("express");
const router = express.Router();
const golfController = require("../controllers/golfController");

router.get("/", golfController.homepage);
router.get("/draft", golfController.draft);
router.get("/history", golfController.history);
router.get("/tournament", golfController.tournament);

module.exports = router;

const express = require("express");
const controller = require("../controllers/events.controllers");
const router = express.Router();

router.get("/get-all-events", controller.getAllEventsUser);
module.exports = router;

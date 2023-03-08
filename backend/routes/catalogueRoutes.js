const express = require("express");
const router = express.Router();
const { getCataloge } = require("../controllers/catalogueControllers");

router.get("/:id", getCataloge);

module.exports = router;

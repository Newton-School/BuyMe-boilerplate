const express = require("express");

const { modifyinventory } = require("../controllers/inventoryControllers");

const router = express.Router();

router.post("/modify", modifyinventory);

module.exports = router;
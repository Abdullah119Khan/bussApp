const express = require("express");
const {
  createBus,
  getBuss,
  updateBus,
  deleteBus,
  getByIdBus,
} = require("../controller/bus.controller");
const { verifyAdminToken } = require("../utils/authChecking");
const router = express.Router();

router.get("/bus/getBus", getBuss);
router.get("/bus/getOne/:id", getByIdBus);
router.post("/bus/create", verifyAdminToken, createBus);
router.put("/bus/update/:id", verifyAdminToken, updateBus);
router.delete("/bus/delete/:id", verifyAdminToken, deleteBus);

module.exports = router;

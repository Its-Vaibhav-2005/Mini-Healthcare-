const express = require("express");
const router = express.Router();
const {
  submitSupportRequest,
  getAllSupportRequests
} = require("../controllers/supportController");

router.post("/support", submitSupportRequest);
router.get("/support", getAllSupportRequests);

module.exports = router;

const express = require("express");

const {
  createEnquiry,
  getAllEnquiries,
  getSingleEnquiry,
  deleteEnquiry,
} = require("../controllers/enquiryController");

const router = express.Router();

router.post("/", createEnquiry);

router.get("/", getAllEnquiries);

router.get("/:id", getSingleEnquiry);

router.delete("/:id", deleteEnquiry);

module.exports = router;
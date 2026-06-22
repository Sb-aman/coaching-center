const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  studentName: String,
  parentName: String,
  phone: String,
  className: String,
  batch: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);
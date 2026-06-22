const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    console.warn("⚠️  Server will continue running without database connection");
    // Don't exit, let server run in case you want to test without DB
  }
};

module.exports = connectDB;

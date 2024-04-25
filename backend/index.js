// app.js or index.js

require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose"); // Import Mongoose
const app = express();
const authRoutes = require("./routes/auth");

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Connection to MongoDB failed:", error);
});

// Mount auth routes
app.use("/api/auth", authRoutes);

// Other routes and middleware...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

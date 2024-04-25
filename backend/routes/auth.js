// routes/auth.js

const express = require("express");
const router = express.Router();
const User = require("../models/User"); 


router.post("/register", async (req, res) => {
  try {
    console.log("2233333");
  
    const { username, email, password } = req.body;

    
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    
    const newUser = new User({
      username,
      email,
      password, 
    });

    
    await newUser.save();


    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    
    console.error("Registration failed:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  console.log("dsbhfhdbhcbhbhbds")
    try {
      const { email, password } = req.body;
  
      // Check if email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Check if password is correct (basic comparison of plain text passwords)
      if (password !== user.password) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Authentication successful
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });

module.exports = router;

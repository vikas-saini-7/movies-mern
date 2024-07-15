const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "User with this email already exist" });
    } else {
      const createdUser = await User.create({ name, email, password });
      const token = jwt.sign(
        { userId: createdUser._id },
        process.env.JWT_SECRET
      );
      res.status(200).json({ token, userDetails: user });
    }
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Error Signing In" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(409).json({ message: "Authentication failed" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(409).json({ message: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token, userDetails: user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.json({ message: "Error logging In" });
  }
};

exports.validateToken = async (req, res) => {
  try {
    const user = req.user;
    if (user) {
      res.status(200).json({ userDetails: user });
    } else {
      res.status(409).json({ message: "Token Not validated" });
    }
  } catch (error) {
    console.error("Error validating token:", error);
    res.status(500).json({ message: "Error validating token" });
  }
};

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if(user){
            res.status(500).json({ success: false, message: 'User with this email already exist' });
        } else{
            const createdUser = await User.create({ name, email, password });
            const token = jwt.sign({ userId: createdUser._id }, process.env.JWT_SECRET);
            res.json({ success: true, token, userDetails:{name, email } });
        }
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token, userDetails:{name:user.name, email: user.email } });
    } catch (error) {
        console.error('Error logging in:', error);
        res.json({ success: false, message: 'Server error' });
    }
};

exports.validateToken = async (req, res) => {
    try {
        const user = req.user;
        if(user){
            res.status(201).json({success: true, userDetails:{name:user.name, email: user.email } })
        }
    } catch (error) {
        console.error('Error fetching jobs by user:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
    try {
        // Extract token from Authorization header
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ success: false, message: 'Authorization failed: No token provided' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ success: false, message: 'Authorization failed: Invalid token' });
        }

        // Fetch user based on decoded token (user ID)
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Authorization failed: User not found' });
        }

        // Attach user to request object for further use in route handlers
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in authMiddleware:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = authMiddleware;
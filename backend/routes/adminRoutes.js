const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// Admin Dashboard - Get all user data
router.get('/admin-dashboard', authMiddleware, async (req, res) => {
    try {
        // Check if the user is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        // Retrieve all user data
        const users = await User.find({}, '-password'); // Exclude password field

        res.status(200).json({ message: 'Admin dashboard', users });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;
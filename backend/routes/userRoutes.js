const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserController = require('../controllers/userController');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// register

router.post('/register', UserController.registerUser);
// Generate Password
router.post('/generate-password', async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ email: email, passwordResetToken: token });
        if (!user) {
            return res.status(400).json({ message: 'Invalid token or email' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        user.password = hashedPassword; // Store hashed password in the database
        await user.save();

        res.status(200).json({ message: 'Password set successfully' });
    } catch (error) {
        console.error('Error setting password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// POST /api/forgot-password
router.post('/forgot-password', UserController.sendPasswordResetEmail);

// POST /api/reset-password
router.post('/reset-password', UserController.resetPassword);

// POST Login data
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email' });
        }

        // Compare plain text password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Check the user's role
        if (user.role === 'admin') {
            // Redirect to the admin dashboard
            return res.status(200).json({ message: 'Admin login successful', role: 'admin' });
        } else if (user.role === null) {
            // Redirect to the user dashboard
            return res.status(200).json({ message: 'User login successful', role: 'user' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Logout
router.post('/logout', (req, res) => {
    // In a real-world scenario, you can clear the token from the client side
    res.status(200).json({ message: 'Logged out successfully' });
});

// dashboard route
router.get('/dashboard', authMiddleware, (req, res) => {
    // The user is authenticated and authorized to access this route
    res.status(200).json({ message: 'Access granted' });
});

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

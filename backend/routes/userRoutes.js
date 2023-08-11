const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserController = require('../controllers/userController');
const User = require('../models/User');

// register

router.post('/register', UserController.registerUser);
// Generate Password
router.post('/generate-password', async (req, res) => {
    const { token, password } = req.body;

    try {
        const user = await User.findOne({ password: token });
        if (!user) {
            return res.status(400).json({ message: 'Invalid token' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        user.password = password; 
        await user.save();
        res.status(200).json({ message: 'Password set successfully' });
    } catch (error) {
        console.error('Error setting password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

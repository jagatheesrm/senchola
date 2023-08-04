const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route: POST /api/register
// Description: User registration route
router.post('/register', UserController.registerUser);

module.exports = router;

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = user;

        // Check user's role for authorization
        if (req.route.role && req.user.role !== req.route.role) {
            return res.status(403).json({ message: 'Access denied' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;

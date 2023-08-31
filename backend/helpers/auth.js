const User  = require('../models/User');
const bcrypt = require('bcryptjs');

// Reset user's password using the token
async function resetUserPassword(email, token, newPassword) {
    const user = await User.findOne({
        email,
        passwordResetToken: token,
        passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
        return { success: false, message: 'Invalid or expired token.' };
    }

    // Update user's password
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Hash the password
        user.password = hashedPassword; // Store hashed password in the database
        await user.save()
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    return { success: true };
}

module.exports = {  resetUserPassword };

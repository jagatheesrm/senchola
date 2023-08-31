const User  = require('../models/User');

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
    user.password = newPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    return { success: true };
}

module.exports = {  resetUserPassword };

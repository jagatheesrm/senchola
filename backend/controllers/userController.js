const User = require('../models/User');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const dotenv = require('dotenv');
const crypto = require('crypto');
const { resetUserPassword } = require('../helpers/auth');
dotenv.config();



const sendWelcomeEmail = async (email, fullName, token0) => {

  const tokenLink = `${process.env.CLIENT_URL}/generate-password/${token0}`;

  // HTML template file
  const filePath = path.join(__dirname, '../email-template/welcome_email.html');
  const source = fs.readFileSync(filePath, 'utf-8');

  const template = handlebars.compile(source);

  const emailContent = template({ fullName, tokenLink });

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Welcome to our website',
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);
};

const UserController = {
  registerUser: async (req, res) => {
    try {
      const {
        fullName,
        gender,
        mobile,
        email,
        address,
        city,
        state,
        qualification,
        degree,
        passOutYear,
        collegeName,
        wantToLearn,
        hasLaptop,
        howDidYouKnow,
      } = req.body;

      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      // Create a new user instance with the data from the request
      const newUser = new User({
        fullName,
        gender,
        mobile,
        email,
        address,
        city,
        state,
        qualification,
        degree,
        passOutYear,
        collegeName,
        wantToLearn,
        hasLaptop,
        howDidYouKnow,
      });

      newUser.password = req.body.password;

      // Save the user to the database
      await newUser.save();
      const token0 = crypto.randomBytes(20).toString('hex');
      newUser.password = token0;
      await newUser.save();

      // Send welcome email
      await sendWelcomeEmail(newUser.email, newUser.fullName, newUser.password);

      res.status(201).json({ message: 'Registration successful', user: newUser.fullName });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  //Forgot Password
  sendPasswordResetEmail: async (req, res) => {
    try {
      const { email } = req.body;

      // Check if the user with the given email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Generate a password reset token
      const token = crypto.randomBytes(20).toString('hex');
      user.passwordResetToken = token;
      user.passwordResetExpires = Date.now() + 3600000; // Token expires in 1 hour
      await user.save();

      // Send password reset email
      user.email = email;
      const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}/${email}`;
      const emailContent = `Click the following link to reset your password: ${resetLink}`;

      // Reuse the existing transporter for sending emails
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: user.email,
        subject: 'Password Reset',
        text: emailContent,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Password reset link sent successfully' });
    } catch (error) {
      console.error('Error sending password reset email:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  //resetPassword
  resetPassword: async (req, res) => {
    try {
      const { email, token, newPassword } = req.body;

      // Verify the token and reset the user's password
      const resetResult = await resetUserPassword(email, token, newPassword);

      if (resetResult.success) {
        res.status(200).json({ message: 'Password reset successful.' });
      } else {
        res.status(400).json({ error: resetResult.message });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      res.status(500).json({ error: 'An error occurred while resetting the password.' });
    }
  },
};

module.exports = UserController;

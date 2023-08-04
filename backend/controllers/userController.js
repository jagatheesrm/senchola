const User = require('../models/User');

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

      // Check if the email already exists in the database
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

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'Registration successful', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = UserController;































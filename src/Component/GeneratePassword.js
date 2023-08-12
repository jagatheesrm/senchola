import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GeneratorPassword = () => {
  const [passwordData, setPasswordData] = useState({
    token: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGeneratePassword = async () => {
    try {
      const response = await axios.post('localhost:5000/api/generate-password', passwordData);
      if (response.status === 200) {
        toast.success('Password set successfully!');
      }
    } catch (error) {
      console.error('Error setting password:', error);
      toast.error('Password set failed. Please try again later.');
    }
  };

  return (
    <div className="password-generator-container">
      <h2>Password Generator</h2>
      <div className="password-form">
        <label htmlFor="token">Token:</label>
        <input type="text" name="token" value={passwordData.token} onChange={handleChange} />

        <label htmlFor="password">New Password:</label>
        <input type="password" name="password" value={passwordData.password} onChange={handleChange} />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handleChange}
        />

        <button onClick={handleGeneratePassword}>Generate Password</button>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default GeneratorPassword;

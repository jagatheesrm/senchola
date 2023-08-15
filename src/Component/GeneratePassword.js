import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GeneratorPassword = () => {
  const { token } = useParams();
  const [passwordData, setPasswordData] = useState({
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
  
  const navigate = useNavigate();
  const handleGeneratePassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/generate-password', {
        token0: token,
        password: passwordData.password
      });
      if (response.status === 200) {
        toast.success('Password set successfully!');
        navigate('/login');
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

import axios from 'axios';
import React, { useState } from 'react';
import { BsEye, BsEyeSlash, BsPerson } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import zxcvbn from 'zxcvbn';
import "./GeneratePassword.css";
const GeneratorPassword = () => {
  const { token } = useParams();
  const [passwordData, setPasswordData] = useState({
    password: '',
    confirmPassword: '',
    email: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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
        password: passwordData.password,
        email: passwordData.email
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
  // password strength tester
  const passwordStrength = zxcvbn(passwordData.password);
  //password visibilty control
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  
  };

  return (
    <div className="password-generator-container d-flex flex-column col-lg-8">
    <div className="top-content text-center">
      <BsPerson className='profile-icon'/>
      <h2 className=''>Password Generator</h2>
    </div>
      
      <div className="password-form d-flex flex-column  my-5">
      <label htmlFor="email" className='mb-1'>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className='p-2'
                  name="email"
                  value={passwordData.email}
                  onChange={handleChange}
                  required
                />
        <label htmlFor="password" className='mb-1'>New Password:</label>
        <input
          type={showPassword ? 'password' : 'text'}
          name="password"
          value={passwordData.password}
          onChange={handleChange}
          className='p-2'
          />
          <div className="eye-icon text-end " >
          {showPassword ? <BsEyeSlash onClick={togglePasswordVisibility} /> : <BsEye onClick={togglePasswordVisibility}/>}</div>
      

        <label htmlFor="confirmPassword" className='mb-1'>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handleChange}
          className='p-2'
        />

        <button onClick={handleGeneratePassword} className='btn btn-success mt-3'>Generate Password</button>
      </div>

      {/* Password Strength Indicator */}
      <div className="password-strength">
        <label>Password Strength:</label>
        <div className="strength-bar">
          <div
            className={`strength-meter strength-${passwordStrength.score}`}
            style={{ width: `${(passwordStrength.score + 1) * 20}%` }}
          ></div>
        </div>
        <div className={`strength-text strength-${passwordStrength.score}`}>
          {passwordStrength.score === 0 && 'Very Weak' }
          {passwordStrength.score === 1 && 'Weak'}
          {passwordStrength.score === 2 && 'Fair'}
          {passwordStrength.score === 3 && 'Good'}
          {passwordStrength.score === 4 && 'Strong'}
        </div>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default GeneratorPassword;

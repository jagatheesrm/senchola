import React from 'react';
import { Form } from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
// import NewPassword from './NewPassword';
import './forgotpage.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ForgetPassword() {

  const [email, setEmail] = useState('');

  const navigate = useNavigate()
  const getMail = () => {
    navigate('/login');

  }
  const handelForgetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email })
      if (response.status === 200) {
        navigate('/emailget')
      }
      else{
        toast.error('email not exist')
      }
    }

    catch (error) {
      console.error('Error logging in:', error);

      if (error.response) {
        if (error.response.status === 401) {
          toast.error('Invalid email or password. Please try again.');
           
        } else {
          toast.error('An error occurred. Please try again later.');
        }
      } else {
        toast.error('Network error. Please check your internet connection.');
      }
    }

  };
  
  return (
    <>
      <div className='password-main '>
        <div className='forgotpassword'>
          <span className="password-icon"> <FiKey /> </span>
          <h4 className='my-4'> Forget Password?</h4>
          <p className='text-muted px-md-5'>No worries, we'll send you reset instructions</p>

          <Form className='form my-3' onSubmit={handelForgetPassword}>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />

            <button type='submit' className=' btns '>Reset password</button>

          </Form>
          <p className='my-3 backlogin' onClick={getMail}> <BsArrowLeft /> back to login </p>
        </div>
      </div>
      {/* <NewPassword/> */}
    </>
  )
}

export default ForgetPassword
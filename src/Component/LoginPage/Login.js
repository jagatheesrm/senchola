<<<<<<< HEAD
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image1 from "../../Images/Login/Rectangle 4597.png";
import Footer from '../Footer';
import './Login.css';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
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

=======
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login.css';
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
import Image1 from "../../Images/Login/Rectangle 4597.png";
import Footer from '../Footer';


const Login = () => {

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  function handleChange(e) {
    setPassword(e.target.value);
    console.log("s");
    e.preventDefault();
  }

  function handleClick() {
    setVisible(!visible)
  }
>>>>>>> cce9739bc029e8ef4062721c9a59b59feeefe239
  return (
    <div>
      <div className="login-section mt-5 ">
        <Container>
          <Row>
<<<<<<< HEAD
            <Col lg={6} className='Loginform ' >
              <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                  <h2>Login</h2>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="login-button">
                    {isLoggedIn ? 'Logout' : 'Login'}
                  </button>
                </form>
                <ToastContainer position="bottom-right" />
              </div>
=======
            <Col lg={6} className='Loginform' >
              <h1>LOGIN FORM</h1>
              <h3>Welcome back!</h3>
              <p>Enter Your Credential Details to access your account</p>
              <Form style={{maxWidth:'400px' }} >
                <Form.Group controlId="email" className='mb-2'>
                  <Form.Label className='required'>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your email" required/>
                </Form.Group>

                {/* <Form.Group controlId="password" className='pass mb-2'>
                  
                  <Form.Label className='required'>Password</Form.Label>
                  <Form.Control  type={visible ? "text" : "password"   placeholder="Enter your password" required value={password} onChange={handleChange} />
                  
                   <span className='password-toggle-icon' onClick={handleClick}>
                    {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </span>
                  </Form.Group> */}
                  <div className='form-group  pass mb-2'>
                    <label htmlFor='password' className='form-label required'>Password</label>
                    <div><input className='form-control ' type={visible ? "text" : "password"}  placeholder="Enter your password" required value={password} onChange={handleChange} />
                    <span className='password-toggle-icon' onClick={handleClick}>
                    {visible ? <FaEye /> : <FaEyeSlash />}
                  </span> </div>
                  </div>
            
                 
                  
                  <div className='text-end' >
                  <Link to="/signup" style={{ textDecoration: 'none' }}  >Forgot Password!! </Link>
                  </div>
               

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
              


              <Button variant="success" type="submit" className='suc-btn mt-3 w-100'  >
                LOGIN
              </Button>

              <div className='or mt-3'>
              <p ><span>Or</span></p>
              </div>
              <div className='signup mt-3 text-center'>
                <p>Don't have an account?<Link to="/signup" style={{ textDecoration: 'none' }}> SignUp</Link> </p>
              </div>

              </Form>
>>>>>>> cce9739bc029e8ef4062721c9a59b59feeefe239
            </Col>


            <Col lg={6} >
<<<<<<< HEAD
              <img src={Image1} alt="No" className='img-fluid' />
=======
              <img src={Image1} alt="No" className='img-fluid'  />
>>>>>>> cce9739bc029e8ef4062721c9a59b59feeefe239
            </Col>

          </Row>
        </Container>
<<<<<<< HEAD
        
      </div>
      <Footer />
=======
      </div>
      <Footer/>
>>>>>>> cce9739bc029e8ef4062721c9a59b59feeefe239
    </div>
  )
}

export default Login
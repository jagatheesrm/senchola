import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css'
import {FaEye ,FaEyeSlash} from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
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
  return (
    <div>
      <div className="login-section mt-5 ">
        <Container>
          <Row>
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
            </Col>


            <Col lg={6} >
              <img src={Image1} alt="No" className='img-fluid'  />
            </Col>

          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image1 from "../../Images/Login/Rectangle 4597.png";
import { useAuth } from '../../auth';
import Footer from '../Footer';
import './Login.css';


const Login = ( ) => {
  const auth= useAuth();
  auth.ismaketrue(false);
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleislogin=()=>{

    auth.ismaketrue(true);

  }
 


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        handleislogin();
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

  return (
    <div>
      <div className="login-section mt-5 ">
        <Container>
          <Row>
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
                    Login
                  </button>
                  <div className="form-group">
                  <Link to='/forgot-password' > Forget Password ?</Link>
                  </div>
                </form>
                <ToastContainer position="bottom-right" />
              </div>
            </Col>


            <Col lg={6} >
              <LazyLoadImage  src={Image1} alt="No" effect='blur' className='img-fluid' />
            </Col>

          </Row>
        </Container>

      </div>
      <Footer />
    </div>
  )
}

export default Login
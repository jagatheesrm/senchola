<<<<<<< HEAD
import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Component/Footer';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: '',
    qualification: '',
    degree: '',
    passOutYear: '',
    collegeName: '',
    wantToLearn: '',
    hasLaptop: '',
    howDidYouKnow: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      toast.success(response.data.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      else if (error.message === 'Network Error') {
        toast.error('Could not connect to the server. Please try again later.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      else {
        toast.error('Registration failed. Please try again.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <div>
        <div className="form-card-container">
          <h1 className="project-heading">SENCHOLA UNIVERSITY</h1>
          <h2 className="form-heading">USER FORM</h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-container">
              <div className="user-input-box">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input-box"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  className="select-degree-box"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" required>--Select Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="user-input-box">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="input-box"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-box"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="input-box"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="user-input-box">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="input-box"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  className="input-box"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="text"
                  placeholder="Enter your qualification"
                  className="input-box"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="degree">Degree</label>
                <input
                  type="text"
                  placeholder="Enter your degree"
                  className="input-box"
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="passOutYear">Pass Out Year</label>
                <input
                  type="text"
                  placeholder="Enter your pass out year"
                  className="input-box"
                  id="passOutYear"
                  name="passOutYear"
                  value={formData.passOutYear}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="collegeName">College Name</label>
                <input
                  type="text"
                  placeholder="Enter your college name"
                  className="input-box"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="wantToLearn">What Do You Want to Learn?</label>
                <input
                  type="text"
                  placeholder="Enter your learning interests"
                  className="input-box"
                  id="wantToLearn"
                  name="wantToLearn"
                  value={formData.wantToLearn}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="user-input-box">
                <label htmlFor="hasLaptop">Do You Have a Laptop?</label>
                <select
                  id="hasLaptop"
                  className="select-degree-box"
                  name="hasLaptop"
                  value={formData.hasLaptop}
                  required
                  onChange={handleChange}
                >
                  <option value="">--Select Option--</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="user-input-box">
                <label htmlFor="howDidYouKnow">How Did You Know About Us?</label>
                <input
                  type="text"
                  placeholder="Enter how you found us"
                  className="input-box"
                  id="howDidYouKnow"
                  name="howDidYouKnow"
                  value={formData.howDidYouKnow}
                  onChange={handleChange}
                  required
                />
              </div>


            </div>
            <div className="btn-container">
              <button type="submit" className="register-button">
                REGISTER
              </button>
            </div>
          </form>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
=======
import React from 'react';
import './Form.css'; 
import Footer from '../../Component/Footer'
 
const Form = () => {
  return (
    <>
    <div>
      <div className="form-card-container"> 
        <h1 className="project-heading">
          SENCHOLA UNIVERSITY 
        </h1>
        <h2 className = "form-heading">USER FORM</h2> 

        <form action='#' > 
          <div className="form-container">  
            <div className= "user-input-box">
              
              <label htmlFor="firstname" >First Name <span className='asterisk'>*</span> </label>
              <input type="text" placeholder='Enter your name' className="input-box" id="firstname" />
            </div> 
            <div className= "user-input-box">
            
                <label htmlFor="lastname" >Last Name </label>
                <input type="text" placeholder='Enter your name' className="input-box" id="lastname" />
            
            </div>
            <div className= "user-input-box">
            
            <label htmlFor="fathername">Father Name <span className='asterisk'>*</span></label> 
            <input type="text" placeholder='Enter father name' className="input-box" id="fathername" />
        
            </div>

            <div className= "user-input-box">
            
            <label htmlFor="education" >Education Qualification <span className='asterisk'>*</span></label>
            <select id="education" className='select-degree-box'>
                <option value = {"selectyourDegree"}>--Select your Degree--</option>
                <option value={"B.E/B.Tech"}>B.E/B.Tech</option>
                <option value={"BCA"}>BCA</option>
                <option value={"MCA"}>MCA</option> 
            </select> 
            </div>

            

            <div className= "user-input-box">
            
            <label htmlFor="phonenumber" >Phone Number <span className='asterisk'>*</span></label>
            <input type="text" placeholder='Enter your number' className="input-box" id="phonenumber" />
        
            </div>

            <div className= "user-input-box">
            
            <label htmlFor="email" >Email address <span className='asterisk'>*</span></label>
            <input type="text" placeholder='Enter your email' className="input-box" id="email" />
        
            </div>
            <div className= "user-input-box">

            <label htmlFor="selectdob">Date of Birth(DOB) <span className='asterisk'>*</span></label>
            <input type="date" className="select-date-box" id="selectdob" />

            </div>
            <div className= "user-input-box">
            
            <label htmlFor="selectbatch" >Your Batch no <span className='asterisk'>*</span></label>
            <select id="selectbatch" className='select-degree-box'>
                <option value = {"selectyourbatch"}>--Select your Batch--</option>
                <option value={2016}>2022</option>
                <option value={2017}>2021</option>
                <option value={2018}>2020</option> 
            </select>
        
            </div> 
            <div className= "user-input-box">
            
            <label htmlFor="selectdomain" >Your Domain <span className='asterisk'>*</span></label>
            <select id="selectdomain" className='select-degree-box'>
                <option value = {"selectyourbatch"}>--Select your Domain--</option>
                <option value={"frontend"}>Frontend</option>
                <option value={'backend'}>Backend</option>
                <option value={'devops'}>Flutter</option> 
                <option value={'ui/ux'}>UI/UX</option> 
                <option value={'cybersecurity'}>CyberSecurity</option> 
            </select>
            
        
            </div>
            <div className= "user-input-box"> 

            <label htmlFor="file" >Upload KYC Documents <span className='asterisk'>*</span></label> 
            <input type="file"  className="upload-file-box" id="file" name="file" accept=".pdf"/>

            
            </div>
            <div className= "user-input-box"> 
              
            
            <label htmlFor="uploadresume" >Upload Resume <span className='asterisk'>*</span></label> 
            <input type="file" className="upload-file-box" id="uploadresume" name="resume" accept=".pdf" />  

            </div> 
            </div> 
            <div className='btn-container'>
            <button className='register-button'>REGISTER</button> 
            </div>
            
          
        </form> 
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Form


>>>>>>> cce9739bc029e8ef4062721c9a59b59feeefe239

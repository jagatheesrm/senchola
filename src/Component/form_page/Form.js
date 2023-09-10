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
      window.alert('Registration successful! Please check your email to create a password and login.');
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
                <label htmlFor="passOutYear">Pass-Out Year </label>
                <select
                  id="passOutYear"
                  name='passOutYear'
                  className="select-degree-box"
                  value={formData.passOutYear}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select pass-out year--</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="Before 2016">Before 2016</option>
                </select>
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
                <label htmlFor="wantToLearn">What do you want to learn? </label>
                <select
                  id="wantToLearn"
                  className="select-degree-box"
                  name="wantToLearn"
                  value={formData.wantToLearn}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select option--</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Wordpress Development">Wordpress Development</option>
                  <option value="SEO">SEO</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Youtube / Content Creation">Youtube / Content Creation</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Video Shooting">Video Shooting</option>
                  <option value="Devops (Cloud)">Devops (Cloud)</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="IT Sales (International Sales)">IT Sales (International Sales)</option>
                  <option value="Business Development">Business Development</option>
                  <option value="Business Analysis">Business Analysis</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="HR / Admin">HR / Admin</option>
                  <option value="Others">Others</option>
                </select>
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
                <label htmlFor="howDidYouKnow">How did you know about this program? </label>
                <select
                  id="howDidYouKnow"
                  className="select-degree-box"
                  name='howDidYouKnow'
                  value={formData.howDidYouKnow}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select option--</option>
                  <option value="Google">Google</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Friends">Friends</option>
                  <option value="Company’s Website">Company’s Website</option>
                  <option value="Others">Others</option>
                </select>
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

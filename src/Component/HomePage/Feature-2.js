import { faBookOpen, faBriefcase, faLaptop, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./feature-2.css";
// import { Container } from 'react-bootstrap';

const Feature2 = () => {
  return (
     <div className='feature-main-container d-lg-flex p-lg-3 p-sm-5'>
     {/* Left Section */}
     <div className='feature-left-content mx-5 col-sm-6 col-md-8 col-lg-3 py-3'>
       <h1 className='fw-500 py-2'>Expert Talent With Curated Resources & Support</h1>
       <p className='py-2'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
       </p>
       <button className='btn btn-success feature-btn'>See More</button>
     </div>

     {/* Right Section */}
     
     <div className='feature-right-content d-flex flex-wrap'>
       <div className='right-card col-md-5 col-lg-5 m-3'>
         <div className='card-1 mt-5'>
           <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-1'>
             <FontAwesomeIcon icon={faBookOpen} size='2x' />
           </div>
           <h3 className='text-white my-3'>Good Infrastructure</h3>
           <p className='text-white'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
           </p>
         </div>
       </div>

       <div className='right-card col-md-5 col-lg-5 m-3'>
         <div className='card-2 mt-5'>
           <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-2'>
             <FontAwesomeIcon icon={faBriefcase} size='2x' />
           </div>
           <h3 className='my-3'>Business</h3>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
           </p>
         </div>
       </div>

       <div className='right-card col-md-5 col-lg-5 m-3'>
         <div className='card-3 mt-5'>
           <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-3'>
             <FontAwesomeIcon icon={faLaptop} size='2x' />
           </div>
           <h3 className='my-3'>Best Support Team</h3>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
           </p>
         </div>
       </div>

       <div className='right-card col-md-5 col-lg-5 m-3'>
         <div className='card-4 mt-5'>
           <div className='d-flex justify-content-center align-items-center rounded-circle icon-box-4'>
             <FontAwesomeIcon icon={faMessage} size='2x' />
           </div>
           <h3 className='my-3'>Senchola Managed</h3>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
           </p>
         </div>
       </div>
       
     </div>
   </div>
  )
}

export default Feature2

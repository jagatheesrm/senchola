import React from 'react';
import { Container } from 'react-bootstrap';
import boy from "../../Images/Testimonials/Boy.png";
import girl from "../../Images/Testimonials/Girl.png";
import star from "../../Images/Testimonials/img7.png";
import "./testimonial.css";
const Testimonials = () => {
  return (
    <div className=' testimonial-content p-5'>
    <div className='text-center'>
    <h1 className='testimonial-title'>Testimonials</h1>
      <p>what people say about us</p>
      </div>
      <Container >
      <div className='container  '> 
      <div className='row my-lg-5'>
        <div className='people-1 col  col-md-4 col-xl-2 p-4'>
           <img src={star} alt=''></img>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
           <div className='d-flex'>
           <img src={boy} alt=''></img>
           <div className='mx-3 '>
           <h5 >John</h5>
           <p >developer</p>
           </div>
           </div>
        </div>
       
        <div className='people-2 col  col-md-4 col-xl-2 p-4'>
        <img src={star} alt=''></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
        <div className='d-flex'>
           <img src={girl} alt=''></img>
           <div className='mx-3 '>
           <h5 >Mary</h5>
           <p >Tester</p>
           </div>
           </div>
        </div>
        <div className='people-3 col  col-md-4 col-xl-2 p-4'>
        <img src={star} alt=''></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
        <div className='d-flex'>
           <img src={boy} alt=''></img>
           <div className='mx-3 '>
           <h5 >Maddy</h5>
           <p >Project Manager</p>
           </div>
           </div>
        </div>
        <div className='people-4 col col-md-4 col-xl-2 p-4'>
        <img src={star} alt=''></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
        <div className='d-flex'>
           <img src={girl} alt=''></img>
           <div className='mx-3 '>
           <h5 >Ruby</h5>
           <p >Deveops Engineer</p>
           </div>
           </div>
        </div>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Testimonials

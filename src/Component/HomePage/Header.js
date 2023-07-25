import React from 'react'
import guyLesson from "../../Images/Home/guy-lesson 2.png"
import "./header.css"
const Header = () => {
  return (
    <div className='container p-5'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='header-left-content mt-5'>
          <h1 className='fw-500'>Build Your Career With Senchola</h1>
          <p className='header-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
          <button className='btn btn-success'>Learn More</button>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='header-right-content mt-3 text-center'>
          <img src={guyLesson} className='guylesson img-fluid' alt='Guy Learning'></img>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Header

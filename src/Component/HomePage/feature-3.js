import { faBullhorn, faFileExcel, faPlayCircle, faUnlink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import orange from "../../Images/Knowledge/orange.png";
import "./feature-3.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import { Container } from 'react-bootstrap';
const Feature3 = () => {
  return (
    
      <div className='feature3-main-content  d-lg-flex flex-lg-row flex-md-row '>
        {/* Left Section */}
        <div className='feature3-left-content  '>
          <LazyLoadImage src={orange} className='orange' alt='Orange' effect='blur'/>
          
          <div className='feature3-box'>
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <div className="box d-flex">
                  <FontAwesomeIcon icon={faUnlink} className="icon-1" />
                  <div>
                    <p className='m-0'>5 courses</p>
                    <h5>UI/UX</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-8">
                <div className="box d-flex">
                  <FontAwesomeIcon icon={faBullhorn} className="icon-2" />
                  <div>
                    <p className='m-0'>4 courses</p>
                    <h5>Marketing</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-10 col-lg-8">
                <div className="box d-flex">
                  <FontAwesomeIcon icon={faFileExcel} className="icon-3" />
                  <div>
                    <p className='m-0'>10 courses</p>
                    <h5>Testing</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='feature3-right-content  col-lg-4 mx-lg-5 '>
          <h1>Learn Without Limit and Spread Knowledge</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.
          </p>
          <button className='btn btn-success'>See More</button>
          <FontAwesomeIcon icon={faPlayCircle} size='2x' className='mx-3 play-icon' />
          <h3 className='feature3-h3'>Watch Video</h3>
          <p className='mt-3'>Recent Engagement</p>
          <h1 className='count'>200+</h1>
          <p className='count'>Students</p>
          <h1 className='count'>6+</h1>
          <p className='count'>Courses</p>
        </div>
      </div>
  )
}

export default Feature3

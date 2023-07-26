import React from 'react'
import "./feature-1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTag, faAward, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Feature1 = () => {
  return (
    <div className='container px-md-5 p-5 '>
    <div className='row mt-5'>
    <h1 className='fw-400 text-center feature-title col-12'>Explore Our Program</h1>
      <div className='col-md-4 mb-3   py-3 '>
        <div className='program d-flex flex-column align-items-center'>
          <FontAwesomeIcon icon={faBook} size='3x' className='mb-2' />
          <h2 className='mt-2 mb-3'>Programs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
          <button className='btn btn-outline-success mb-3'>See More <FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div className='col-md-4 mb-3  py-3'>
        <div className='pricing d-flex flex-column align-items-center'>
          <FontAwesomeIcon icon={faTag} size='3x' className='mb-2' />
          <h2 className='mt-2 mb-3'>Pricing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
          <button className='btn btn-outline-success mb-3'>See More <FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      <div className='col-md-4 mb-3  py-3'>
        <div className='certifications d-flex flex-column align-items-center'>
          <FontAwesomeIcon icon={faAward} size='3x' className='mb-2' />
          <h2 className='mt-2 mb-3'>Certifications</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra nam.</p>
          <button className='btn btn-outline-success mb-3'>See More <FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Feature1

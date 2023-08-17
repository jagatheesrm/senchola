import React from 'react'
import { Container } from 'react-bootstrap'
import image1 from "../../Images/Gallery/Rectangle 18.png"
import image2 from "../../Images/Gallery/Rectangle 19.png"
import image3 from "../../Images/Gallery/Rectangle 20.png"
import image4 from "../../Images/Gallery/Rectangle 4584.png"
import "./gallery.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
  return (
    <div className='main-container m-5 '>
    <div className='gallery-heading my-5'>
      <h1 className='fw-500 text-center gallery-title'>Our Gallery</h1>
    </div>
    <Container>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <LazyLoadImage
              src={image1}
              alt="Image1"
              effect='blur'
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <LazyLoadImage
              src={image2}
              alt="Image2"
              effect='blur'
              className="img-fluid rounded mb-4"
            />
            <LazyLoadImage
              src={image3}
              alt="Image3"
              effect='blur'
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <LazyLoadImage
              src={image4}
              alt="Image4"
              effect='blur'
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </Container>
</div>
  )
}

export default Gallery



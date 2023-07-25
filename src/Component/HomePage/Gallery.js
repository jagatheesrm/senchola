import React from 'react'
import image1 from "../../Images/Gallery/Rectangle 18.png"
import image2 from "../../Images/Gallery/Rectangle 19.png"
import image3 from "../../Images/Gallery/Rectangle 20.png"
import image4 from "../../Images/Gallery/Rectangle 4584.png"
import "./gallery.css";
import { Container } from 'react-bootstrap'
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
            <img
              src={image1}
              alt="Image 1"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <img
              src={image2}
              alt="Image 2"
              className="img-fluid rounded mb-4"
            />
            <img
              src={image3}
              alt="Image 3"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <img
              src={image4}
              alt="Image 4"
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



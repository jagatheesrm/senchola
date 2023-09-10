import React from 'react'
import Img1 from '../../Images/profile.jpg'
import Img2 from '../../Images/profile2.jpg'
import Img3 from '../../Images/profile3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
const AboutPf = () => {
  return (
    <div className='profile'>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-3 box-img'>
                     <LazyLoadImage src={Img1} alt="Image1" effect='blur' />
                     <h3>Jasmine</h3>
                     <div className='star'>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     </div>
                     <p>lorem ipsum de consector lom dertui tholsari kari meri theri serku bagutharya 
                        samachara theri kar
                     </p>
                </div>

                <div className='col-lg-3 col-md-3 box-img'>
                     <LazyLoadImage src={Img3} alt="Image1" effect='blur'/>
                     <h3>Jasmine</h3>
                     <div className='star'>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     </div>
                     <p>lorem ipsum de consector lom dertui tholsari kari meri theri serku bagutharya 
                        samachara theri kar
                     </p>
                </div>

                <div className='col-lg-3 col-md-3 box-img'>
                     <LazyLoadImage src={Img2} alt="Image1" effect='blur'/>
                     <h3>Jasmine</h3>
                     <div className='star'>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     <i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i>
                     </div>
                     <p>lorem ipsum de consector lom dertui tholsari kari meri theri serku bagutharya 
                        samachara theri kar
                     </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutPf

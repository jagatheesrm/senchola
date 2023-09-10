import React from 'react'
/*import {Button} from 'react-bootstrap'*/
import 'bootstrap/dist/css/bootstrap.min.css'
import Team1 from '../../Images/team4.jpg'
import Team2 from '../../Images/team2.jpg'
import Team3 from '../../Images/team3.jpg'
import Right from '../../Images/Right.png'
import { FiBookOpen } from 'react-icons/fi'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
const Aboutsen = () => {
  return (
    <div className='about-sen'>
         <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-12 content'>
                     <h2>About Senchola</h2>
                     <p>We are deeply invested in helping business focus on business, so our services
                        are designed to be hassie-free. we adapt to your organization structure through
                        freelauncing or outsourcing.relieving you of the roadblocks that inhibit your
                        company's growth.
                     </p>
                     <p>No matter the scale of your needs, we outsource the exact number of business
                        professionals or processes your company needs for sucess. our services grow easily
                        with your business, ensuring your evolving needs are met.
                     </p>
                     <p>our professional resources and outsourcing services give your company the breadth
                        and depth it needs to scale with speed from a single partner. Let your business needs
                        fall on our broad expertise to drive growth.
                     </p>
                     <button className='btn btn-success'>VIEW MORE</button>
                     <div className='back-icon'>
                        <i className='icon one'>
                           <FiBookOpen/>
                        </i>
                        <i className='icon two'>
                           <FiBookOpen/>
                        </i>
                     </div>

                     <div className='background-light-blue'>

                     </div>
                </div>

                <div className='col-md-6 col-sm-12 d-flex three-img'>
                     <div className='one-img'>
                         <LazyLoadImage effect='blur' src={Team1} className="img img-fluid" alt="team1"/>
                     </div>
                     <div className='two-img'>
                         <LazyLoadImage effect='blur' src={Team2} className="img img-fluid" alt="team2"/>
                         <LazyLoadImage effect='blur' src={Team3} className="img img-fluid" alt="team3"/>
                     </div>
                </div>

                <div className='background-img col-3'>
                     <LazyLoadImage effect='blur' src={Right} alt="Left" className='img img-fluid'/>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Aboutsen

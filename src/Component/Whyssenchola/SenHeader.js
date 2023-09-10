import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import {BsCheck} from 'react-icons/bs'
import Img4 from '../../../src/Images/whysen/img4.jpg'
import Img5 from '../../../src/Images/whysen/img5.jpg'
import Footer from '../Footer'
import WsAbout from './WsAbout'
import WsImages from './WsImages'
import WsEmpty from './WsEmpty'
import CollapseImage from './CollapseImage'
import {BsBook} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const SenHeader = () => {
  return (
    <>
      <div className='ws-header position-relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 col-12 hero-sec position-relative'>
              <i><BsBook /></i>
              <h1>Best Learning <br />
                Education Platform <br />
                is Senchola.</h1>
              <p>We are deeply invested in helping business focus on business so our services
                are designed to be hassie-free.we adapt to your organization structure through
                freelauncing or outsourcing.
              </p>
              <i className='mx-5'><BsBook /></i>
              <div className='button-group'>
                <button className='btn px-4 py-2'>Learn More</button>
                <button className='btn px-4 py-2'><i><AiFillPlayCircle /></i>Watch Later</button>
              </div>
            </div>
            <div className='col-lg-5 col-sm-12 col-12 hero-sec position-relative'>
              <div className='images'>
                <LazyLoadImage effect='blur' className='img img-fluid col-img-fluid img1' src={Img4} alt='img5' />
                <i><BsBook /></i>
                <LazyLoadImage effect='blur' className='img img-fluid img2' src={Img5} alt='img1' />
              </div>

              <ul className='trans-box col-xl-8 col-lg-8 col-md-4 col-sm-5 col-8 '>
                <li><i><BsCheck /></i>Build remote teams</li>
                <li className='mx-3'>faster with senchola</li>
                <li><i><BsCheck /></i>Expert Trainee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WsAbout />
      <WsImages />
      <WsEmpty />
      <CollapseImage />
      <Footer />
    </>
  )
}

export default SenHeader

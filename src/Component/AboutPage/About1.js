import React from 'react'
import AboutGs from './AboutGs'
import Aboutsen from './Aboutsen'
import AboutPf from './AboutPf'
import Footer from '../Footer';
const About1 = () => {
  return (
    <>
    <div className='about-bg'>
      <div className='bg-image'>

      </div>

      <div className='content'>
       <h3><span>We</span> are the best company for <br/>
        your business ready to take your  <br/>   brand sky high</h3>
        <button>LEARN MORE</button>
      </div>
    </div>
    <Aboutsen/>
    <AboutGs/>
    <AboutPf/>
    <Footer/>
    </>
  )
}

export default About1

import React from 'react'
import {BsLinkedin,BsInstagram,BsFillSendFill} from 'react-icons/bs'
import {AiFillYoutube,AiFillFacebook,AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6 col-6 foo'>
                    <h5 className='text text-light'>Senchola</h5>
                    <p className='text text-light footer-ins'>we help ambitious companies scale
                    through our exclusive global network of freelaune talent
                    outsourcing services, and market insights. join Senchola to 
                    accelerate and scale your business growth.</p>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-3 col-6 foo'>
                    <h5 className='text text-light'>Use cases</h5>

                    <div className='footer-ins'>
                        <li className='text text-light'>ui design</li>
                        <li className='text text-light'>ui design</li>
                        <li className='text text-light'>ui design</li>
                        <li className='text text-light'>ui design</li>
                        <li className='text text-light'>ui design</li>
                        <li className='text text-light fw-300'>prototyping</li>
                    </div>
                </div>

                <div className='col-lg-2 col-md-2 col-sm-3 col-6 foo'>
                    <h5 className='text text-light'>Explore</h5>

                    <div className='footer-ins'>
                        <li className='text text-light light-grey'>Figma</li>
                        <li className='text text-light'>Customer</li>
                        <li className='text text-light'>why i Love figma</li>
                        <li className='text text-light'>Figma</li>
                        <li className='text text-light'>Customer</li>
                        <li className='text text-light'>Front end</li>
                    </div>
                </div>

                <div className='col-lg-2 col-md-2 col-sm-4 col-6 foo'>
                    <h5 className='text text-light'>Resources</h5>

                    <div className='footer-ins'>
                        <li className='text text-light' style={{color:"grey"}}>Resources Hub</li>
                        <li className='text text-light'>Support</li>
                        <li className='text text-light'>Education</li>
                        <li className='text text-light'>Resources Hub</li>
                        <li className='text text-light'>Support</li>
                        <li className='text text-light'>Education</li>
                    </div>
                </div>

                <div className='col-lg-3 col-md-2 col-sm-8 col-8 foo'>
                    <span className='text text-light'>connect with senchola technologies</span>
                    <div className='form-group'>
                    <input className='form-control' type="text" placeholder='Email'/>
                    <i className='email-icon'><BsFillSendFill/></i>
                    </div>
                    <div className='social-media-icon'>
                         <i><BsLinkedin/></i>
                         <i><AiFillYoutube/></i>
                         <i><AiFillFacebook/></i>
                         <i><BsInstagram/></i>
                         <i><AiOutlineTwitter/></i>
                    </div>
                </div>
                <hr className='text text-light'/>

                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <p className='text text-light text-center'>All Copyrights Reserved @ 2023 senchola technologies solution</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

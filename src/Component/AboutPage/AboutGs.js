import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {FiBookOpen} from 'react-icons/fi'
import Left from '../../Images/Left.png'
const AboutGs = () => {
  return (
    <div className='global-ser'>
      <div className='container'>
           <div className='row'>
               <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title'>
                    <p className='green fs-lg dummy'>GLOBAL MANAGED SERVICES</p>
                    <p className='dark'>lorem ipsum doler keter seiyur lopkop jeegty juiyis amet consector is the turhui <br>
                    </br>libraries durtur karmal hasan turjur kamasa thukur
                    </p>
                    <div className='box-yellow'>
                         
                    </div>
               </div>
               <div className='col-lg-3 col-md-5 col-sm-12 shadow-lg boxes'>
                    <h4>Marketing</h4>
                    <p>lorem ipsum doler keter seiyur lopkop jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur lorem ipsum doler keter seiyur lopkop 
                    jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur</p>
                    <div className='icon'>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>customer services</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Technical support</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>sales</span></div>
                    </div>
                    <div className='view-all'>
                         <span className='green'>VIEW ALL</span>
                         <p><FontAwesomeIcon icon={faArrowRight}/></p>
                    </div>
               </div>

               <div className='col-lg-3 col-md-5 col-sm-12 shadow-lg boxes'>
                    <h4>Sales Agency</h4>
                    <p>lorem ipsum doler keter seiyur lopkop jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur lorem ipsum doler keter seiyur lopkop 
                    jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur</p>
                    <div className='icon'>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Bussiness Devolpment</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>sales Devolpment</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Appointment Setting</span></div>
                    </div>
                    <div className='view-all'>
                         <span className='green'>VIEW ALL</span>
                         <p><FontAwesomeIcon icon={faArrowRight}/></p>
                    </div>
               </div>

               <div className='col-lg-3 col-md-5 col-sm-12 shadow-lg boxes position-relative back-pink'>
                    <h4>Bank office</h4>
                    <p>lorem ipsum doler keter seiyur lopkop jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur lorem ipsum doler keter seiyur lopkop 
                    jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur</p>
                    <div className='icon'>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Data Entry</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Virtual Assistance</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>online Research</span></div>
                    </div>
                    <div className='view-all'>
                         <span className='green'>VIEW ALL</span>
                         <p><FontAwesomeIcon icon={faArrowRight}/></p>
                    </div>
                    <div className='background-pink'>

                    </div>
               </div>

               <div className='col-lg-3 col-md-5 col-sm-12 shadow-lg boxes'>
                    <h4>RPO</h4>
                    <p>lorem ipsum doler keter seiyur lopkop jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur lorem ipsum doler keter seiyur lopkop 
                    jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur</p>
                    <div className='icon'>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Employee</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Contractors</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Payroll</span></div>
                    </div>
                    <div className='view-all'>
                         <span className='green'>VIEW ALL</span>
                         <p><FontAwesomeIcon icon={faArrowRight}/></p>
                    </div>
               </div>

               <div className='col-lg-3 col-md-5 col-sm-12 mx-3 shadow-lg boxes'>
                    <h4>Client Managed</h4>
                    <p>lorem ipsum doler keter seiyur lopkop jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur lorem ipsum doler keter seiyur lopkop 
                    jeegty juiyis amet consector is the turhui
                    libraries durtur karmal hasan turjur kamasa thukur</p>
                    <div className='icon'>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Elastic Workforce</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>one to several</span></div>
                        <div className='icon-check'><FontAwesomeIcon icon={faCheckDouble}/><span className='green'>Team integration</span></div>
                    </div>
                    <div className='view-all'>
                         <span className='green'>VIEW ALL</span>
                         <p><FontAwesomeIcon icon={faArrowRight}/></p>
                    </div>
               </div>

               <div className='col-6 image-left'>
                         <img src={Left} alt="Left"/>
                    </div>
               </div> 

               <div className='icon-background'>
                    <i className='icon-one'><FiBookOpen/></i>  
                    <i className='icon-two'><FiBookOpen/></i> 
                    <i className='icon-three'><FiBookOpen/></i>    
               </div> 
      </div> 
    </div>
  )
}

export default AboutGs

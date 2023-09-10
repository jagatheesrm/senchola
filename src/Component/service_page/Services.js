import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Servicecard from './Servicecard';
import {FcAssistant, FcBusinessContact, FcHeadset, 
    FcSalesPerformance,FcBullish,FcTemplate,FcVoicemail,FcAndroidOs} from "react-icons/fc"


const Services = () => {

    
  return (
    <section id="services">
        <Container>
            <div className='text-center my-5'>
                <h2 className='service-heading mb-4'>OUR SERVICES</h2>
                <p className='service-description'> The institution specializes in training students in cutting-edge 
                software technologies, equipping them with the skills needed to excel in the industry.
                </p>
            </div> 
            <Row> 
                {
                    <Servicecard/> 
                }
               
                <div className='viewmore-services-btn my-5'>
                    <button>View More Services <i className="bi bi-chevron-right" ></i> </button> 
                </div>
            </Row>

            <Row className ="align-items-center m-3 ">
                <Col xs={12} lg={7}>
                    <div className='service-image-con mb-5 mr-5'>
                        <Image  className='serviceimg-relative' src = {require('../../Images/service/servicemainimage.png')} fluid = {true} alt = 'services' >
                           
                        </Image> 

                        <div className='absolute-box1'>
                            <p>
                                <FcAndroidOs size = "2.5rem" className='logo-custom-design'/> 
                                Logo Design 
                            </p>  
                            <p>
                                <FcVoicemail size = "2.5rem" className='logo-custom-design'/> 
                                Poster Design
                            </p> 
                            <p>
                                <FcTemplate size = "2.5rem" className='logo-custom-design'/> 
                                Business Card
                            </p> 
                          
                        </div>
                        <div className='absolute-box2'>
                            <p>
                                <FcSalesPerformance size = "2.5rem" className='logo-custom-design'/> 
                                Product Marketing  
                            </p>  
                            <p>
                                <FcVoicemail size = "2.5rem" className='logo-custom-design'/>  
                                Influencer Marketing 
                            </p> 
                            <p>
                                <FcBullish size = "2.5rem" className='logo-custom-design'/> 
                                Content Marketing
                            </p> 
                          

                        </div> 
                    </div> 
                                 
                </Col>
                <Col xs={12} lg={5}>
                    <div className='m-5 service-text-con' >  
                        <h6 className = "pt-5 mb-3">WHAT WE DO</h6>
                        <h3>We Help Companies Scale with Vetted, Expert Talent & Resources</h3>
                        <p>We provide expert web design and development services for your business’s benefit. We are an enthusiastic, imaginative, and dedicated team of web developers 
                            who mix high-caliber UI/UX designs with practical web solutions.</p>
                        <button className ="contactUs-btn">Contact Us</button>
                    </div> 
                   
                </Col>
                <div className='betterway-con '>
                <h3>A BETTER WAY TO SCALE YOUR TEAM</h3> 
                <p >
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in, quos voluptatum officiis consectetur nisi maiores exercitationem 
                   sapiente eveniet eos non repellendus cum mollitia. Minima!</p>

                </div> 

               
               
            </Row>
            
        </Container>
        <Container fluid>
            <Row>
                <div className='service-bottom-con py-5 mb-5'> 
                
                    <div className='service-bottom-card  m-5'>
                        
                        <FcAssistant size= "8rem" className='custom-design mb-3'/> 
                        <h1>Talk with our specialists</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque, temporibus quod iusto et quidem iure modi, praesentium natus 
                            ipsam consequuntur in quo obcaecati aliquid tempora exercitationem voluptatibus magnam minus.
                        </p>
                       

                    </div>
                    <div className='service-bottom-card2  m-5'>
                        
                        <FcBusinessContact size= "8rem" className='custom-design mb-3'/> 
                        <h1>Talk with our specialists</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque, temporibus quod iusto et quidem iure modi, praesentium natus 
                            ipsam consequuntur in quo obcaecati aliquid tempora exercitationem voluptatibus magnam minus.
                        </p>
                       

                    </div>
                    <div className='service-bottom-card  m-5'>
                        
                        <FcHeadset size= "8rem" className='custom-design mb-3'/> 
                        <h1>Talk with our specialists</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque, temporibus quod iusto et quidem iure modi, praesentium natus 
                            ipsam consequuntur in quo obcaecati aliquid tempora exercitationem voluptatibus magnam minus.
                        </p>
                       

                    </div> 
               
                  
                </div>

            </Row>
        </Container>
              
        
       
    </section>

  )
}

export default Services
import React from 'react'

import Card from 'react-bootstrap/Card';
import { Col} from 'react-bootstrap'; 
const Servicecard = () => {
  return (
    
        <div className='container'>
          <div className='row '>
              <Col md = {6} lg={4}>
                <Card className='m-3' style={{ border: 'none', boxShadow: 'none' }}>
                    <Card.Img variant="top" src= {require('../../Images/service/Websitedesign.png')}  />
                    <Card.Body >
                      <Card.Title>Website Design & Development</Card.Title>
                      <Card.Text>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nemo repudiandae eveniet iure aspernatur dolores veritatis quod, nihil deleniti quisquam officiis dignissimos sit harum! Itaque!
                      </Card.Text> 
                      <div className='viewmore-button'>
                        <a href='https://senchola.com/website-design-development/' target="_blank" rel="noreferrer">
                          VIEW MORE <i className="bi bi-chevron-right"></i> </a>
                      </div>
                     
                    </Card.Body>
                </Card> 
              </Col>
              <Col md = {6} lg={4}>
                <Card className='m-3' style={{ border: 'none', boxShadow: 'none' }}>
                    <Card.Img variant="top" src= {require('../../Images/service/logo.png')} />
                    <Card.Body>
                      <Card.Title>Logo & Banner Designing</Card.Title>
                      <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea officia, distinctio deleniti nobis impedit quia ipsam itaque excepturi neque, dolor nulla, totam quisquam repellendus.
                      </Card.Text>
                      <div className='viewmore-button'>
                        <a href='https://senchola.com/logo-design/' target="_blank" rel="noreferrer">
                          VIEW MORE <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </Card.Body>
                </Card> 
              </Col>
              <Col md = {6} lg={4}>
                <Card className='m-3' style={{ border: 'none', boxShadow: 'none' }}>
                    <Card.Img variant="top" src={require('../../Images/service/android.png')}  />
                    <Card.Body>
                      <Card.Title>Android App Development</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora, assumenda labore laboriosam reiciendis placeat sint rerum aliquid dignissimos temporibus ullam cumque, ipsa expedita libero?
                      </Card.Text>
                      <div className='viewmore-button'>
                        <a href='https://senchola.com/android-app-development/' target="_blank" rel="noreferrer">VIEW MORE
                        <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </Card.Body>
                </Card> 
              </Col>
              <Col md = {6} lg={4}>
                <Card className='m-3' style={{ border: 'none', boxShadow: 'none' }}>
                    <Card.Img variant="top" src={require('../../Images/service/wordpress.png')}  />
                    <Card.Body>
                      <Card.Title>wordpress Development</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo expedita deserunt incidunt quis qui, adipisci vel eaque impedit in cumque deleniti perferendis, libero magni!
                      </Card.Text>
                      <div className='viewmore-button'>
                        <a href='https://senchola.com/wordpress-development/' target="_blank" rel="noreferrer">VIEW MORE
                        <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </Card.Body>
                </Card> 
              </Col>
              <Col md = {6} lg={4}>
                <Card className='m-3' style={{ border: 'none', boxShadow: 'none' }}>
                    <Card.Img variant="top" src={require('../../Images/service/content.png')}  />
                    <Card.Body>
                      <Card.Title>Content Marketing</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto quaerat consequuntur, eaque autem ipsum porro sunt ea doloremque provident, deleniti laborum facere. Excepturi, id!
                      </Card.Text>
                      <div className='viewmore-button'>
                        <a href='https://senchola.com/website-design-development/' target="_blank" rel="noreferrer">VIEW MORE
                        <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </Card.Body>
                </Card> 
              </Col>
              <Col md = {6} lg={4}>
                <Card className='m-3' style={{ border: 'none', boxShadow: 'none' }}>
                    <Card.Img variant="top" src={require('../../Images/service/ios.png')}  /> 
                    <Card.Body>
                      <Card.Title>IOS App Development</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa rerum asperiores consequatur vitae eaque omnis dolorum quae libero obcaecati nemo exercitationem, dolor, doloremque totam!
                      </Card.Text>
                      <div className='viewmore-button'>
                        <a href='https://senchola.com/ios-app-development/' target="_blank" rel="noreferrer">VIEW MORE
                        <i className="bi bi-chevron-right"></i></a>
                      </div>
                    </Card.Body>
                </Card> 
              </Col>
              
           
            
        </div>
        
    

     
    </div>
    
    

  )
}

export default Servicecard
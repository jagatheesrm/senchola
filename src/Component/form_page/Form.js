import React from 'react';
import './Form.css'; 
import Footer from '../../Component/Footer'
 
const Form = () => {
  return (
    <>
    <div>
      <div className="form-card-container"> 
        <h1 className="project-heading">
          SENCHOLA UNIVERSITY 
        </h1>
        <h2 className = "form-heading">USER FORM</h2> 

        <form action='#' > 
          <div className="form-container">  
            <div className= "user-input-box">
              
              <label htmlFor="firstname" >First Name <span className='asterisk'>*</span> </label>
              <input type="text" placeholder='Enter your name' className="input-box" id="firstname" />
            </div> 
            <div className= "user-input-box">
            
                <label htmlFor="lastname" >Last Name </label>
                <input type="text" placeholder='Enter your name' className="input-box" id="lastname" />
            
            </div>
            <div className= "user-input-box">
            
            <label htmlFor="fathername">Father Name <span className='asterisk'>*</span></label> 
            <input type="text" placeholder='Enter father name' className="input-box" id="fathername" />
        
            </div>

            <div className= "user-input-box">
            
            <label htmlFor="education" >Education Qualification <span className='asterisk'>*</span></label>
            <select id="education" className='select-degree-box'>
                <option value = {"selectyourDegree"}>--Select your Degree--</option>
                <option value={"B.E/B.Tech"}>B.E/B.Tech</option>
                <option value={"BCA"}>BCA</option>
                <option value={"MCA"}>MCA</option> 
            </select> 
            </div>

            

            <div className= "user-input-box">
            
            <label htmlFor="phonenumber" >Phone Number <span className='asterisk'>*</span></label>
            <input type="text" placeholder='Enter your number' className="input-box" id="phonenumber" />
        
            </div>

            <div className= "user-input-box">
            
            <label htmlFor="email" >Email address <span className='asterisk'>*</span></label>
            <input type="text" placeholder='Enter your email' className="input-box" id="email" />
        
            </div>
            <div className= "user-input-box">

            <label htmlFor="selectdob">Date of Birth(DOB) <span className='asterisk'>*</span></label>
            <input type="date" className="select-date-box" id="selectdob" />

            </div>
            <div className= "user-input-box">
            
            <label htmlFor="selectbatch" >Your Batch no <span className='asterisk'>*</span></label>
            <select id="selectbatch" className='select-degree-box'>
                <option value = {"selectyourbatch"}>--Select your Batch--</option>
                <option value={2016}>2022</option>
                <option value={2017}>2021</option>
                <option value={2018}>2020</option> 
            </select>
        
            </div> 
            <div className= "user-input-box">
            
            <label htmlFor="selectdomain" >Your Domain <span className='asterisk'>*</span></label>
            <select id="selectdomain" className='select-degree-box'>
                <option value = {"selectyourbatch"}>--Select your Domain--</option>
                <option value={"frontend"}>Frontend</option>
                <option value={'backend'}>Backend</option>
                <option value={'devops'}>Flutter</option> 
                <option value={'ui/ux'}>UI/UX</option> 
                <option value={'cybersecurity'}>CyberSecurity</option> 
            </select>
            
        
            </div>
            <div className= "user-input-box"> 

            <label htmlFor="file" >Upload KYC Documents <span className='asterisk'>*</span></label> 
            <input type="file"  className="upload-file-box" id="file" name="file" accept=".pdf"/>

            
            </div>
            <div className= "user-input-box"> 
              
            
            <label htmlFor="uploadresume" >Upload Resume <span className='asterisk'>*</span></label> 
            <input type="file" className="upload-file-box" id="uploadresume" name="resume" accept=".pdf" />  

            </div> 
            </div> 
            <div className='btn-container'>
            <button className='register-button'>REGISTER</button> 
            </div>
            
          
        </form> 
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Form



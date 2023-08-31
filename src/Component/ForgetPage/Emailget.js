import React from 'react'
import { FiMail } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import './forgotpage.css';
import { useNavigate } from 'react-router-dom';

const Email = () => {

  
const navigate = useNavigate()
const getMail = ()=>{
navigate('/login')

}
  return (
        
    
    <div className='password-main '>
            <div className='forgotpassword'>
                <span className="email-icon"> <FiMail /> </span>
                <h4 className='my-3'>  Check your email</h4>
                <p className='text-muted px-md-5'>We send a password reset link to </p>
                <p className=' px-md-5 mb-3 pt-0'>olivia@untittledui.com </p>
                <button className=' btns mb-1'  > <a className='toemail' href='https://mail.google.com/mail/u/0/#inbox' target='blank'>Open email app</a> </button>
                <p className=' px-md-5 pt-1'>Didn't receive the email?<a  href='/'>Click to resend</a> </p>

              
                
                <p  onClick={getMail} className='my-3 backlogin'> <BsArrowLeft /> back to login </p>
            </div>

        </div>
  )
}

export default Email

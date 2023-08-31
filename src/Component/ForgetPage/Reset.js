import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import "./forgotpage.css";

const Reset = () => {
  return (

     <div className='password-main '>
            <div className='forgotpassword'>
                <span className="email-icon"> <FaCheck  /> </span>
                <h4 className='my-3'>  Password reset</h4>
                <p className='text-muted px-md-5'>Your Password has been sucessfuly reset </p>
               
                <button className=' btns mb-1'> Continue</button>
                

              
                
                <p className='my-3'> <BsArrowLeft /> back to login </p>
            </div>

        </div>
    // <div className='forgotpassword ' >
    // <div className='bg-screen bg-success 'style={{width:"100vw", height:"44vh"}}>  </div>
    
    // <div class="d-flex justify-content-center  ">
        
    // <div className="card cardbox mt-4" style={{width:"20rem", height:"16rem",bottom:"100px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"}}>
    // <div className='card-body mt-2 '>
    //     <h2 className='card-title p-2 text-center'>Password reset</h2>
    //     <p className='card-text p-2 text-center'>Your Password has been<br/> sucessfuly reset.</p>
        
    //     <div> <a href="#" className="btn btn-success w-100 mt-2 p-2">Continue</a></div>
    
    
    
    // </div>
    
    
    // </div>
    // </div>
    // </div>
    
    
  )
}

export default Reset
// import React from 'react'
// import './Reset.css'
// import { FaArrowLeft } from "react-icons/fa";
// import { FaCheck } from "react-icons/fa";

// const Reset = () => {
//   return (
    
//     < div className='reset_pass'>
//         <div className='reset_pass1'>
//         <div className='reset_pass2'>
//         <FaCheck  className='check_icon'/>
//         <br></br>
//       <p aria-hidden="true" >
        
//         <p className='head_reset'>Password reset</p>
//         <p className='pass1'>Your Password has been sucessfuly reset.</p>
//         <p className='pass2'>Click below to Login magically.</p>
//       </p>
//       <button className='btns'>
//       Continue
//       </button>
//       <br></br>
//        <p className='pass3'> <FaArrowLeft />  Back to login</p>

//         </div>
//         </div>

        
        
//     </ div>
//   )
// }

// export default Reset
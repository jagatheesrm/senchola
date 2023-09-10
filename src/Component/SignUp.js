import React from 'react'
import Footer from './Footer'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple,AiFillEyeInvisible} from 'react-icons/ai'


const SignUp = () => {
  return (
    <>
    <div className='sign-up'>
         <div className='container'>
            <div className='row'>
                <div className='col-lg-4 sign-box mt-5 col-md-6'>
                    <h1>SIGNUP FORM</h1>
                    <span>it's Quick & Easy</span>
                    <p>Enter your Credentials Details to create a new account</p>
                    <FormValidation/>
                    <hr></hr>
                    <div className='container'>
                    <div className='row icon'>
                        <div className='col sign-icon d-flex'>
                            <i><FcGoogle/></i>
                            <p>sign in with Google</p>
                        </div>
                        <div className='col sign-icon d-flex'>
                            <i><AiFillApple/></i>
                            <p>sign in  with apple</p>
                        </div>
                        <div className='col-sm-12 account'>
                            <p>I already have an account! <span className='text text-primary very-small'>Login</span></p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='col-lg-2 col-md-0 hide'>
                  
                </div>

                <div className='col-lg-6 sign-box img col-md-5'>

                </div>
            </div>
         </div>
    </div>
    <Footer/>
    </>
  )
}


const FormValidation = () =>{
    return(
        <>
    <form className="form-control-group">
    <div className='mb-3 mt-3'>
      <label htmlFor="uname" className="form-label">First Name <span className='text text-danger'>*</span></label>
      <input type="text" className="form-control" id="uname" placeholder="Enter your name" name="uname" required/>
    </div>
    <div className='mb-3'>
      <label htmlFor="email" className="form-label">Email address <span className='text text-danger'>*</span></label>
      <input type="email" className="form-control" id="email" placeholder="Enter password" name="pswd" required/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor="pwd" className="form-label">Password <span className='text text-danger'>*</span></label>
      <i className='pass-invisible'><AiFillEyeInvisible/></i>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
    </div>

  <button type="submit" className='sign-btn mx-auto col-3'>SIGN UP</button>
  </form>
</>
    )
    }
export default SignUp

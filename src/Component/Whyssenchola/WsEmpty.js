import React from 'react'
import EmptyImage from '../../Images/whysen/img9.jpg'
import { BsCheck,BsBook } from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WsEmpty = () => {
  return (
    <div className='container ws-empty position-relative'>
         <div className='row'>
            <div className='col-lg-6 col-md-12 emp-img position-relative'>
                <i><BsBook/></i>
                <LazyLoadImage src={EmptyImage} alt='EmptyImage' effect='blur' className='img-fluid'/>
                <ul className='trans-box col-lg-5 shadow-lg'>
                    <li><i className='mx-2'><BsCheck/></i>Build remote teams</li>
                    <li className='mx-3'>faster with senchola</li>
                    <li><i className='mx-2'><BsCheck/></i>Expert Trainee</li>
                </ul>
            </div>
            <div className='col-lg-5 col-md-12 content my-5'>
                <h2>Lorem integer dapibus rhonus fusce nisi augue frigilla</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                     laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.   
                </p>
                <i><BsBook/></i>
            </div>
         </div>
         <div className='box hbox box-lg'></div>
         <div className='box pink box-md'></div>
         <div className='box-md yellow'></div>
    </div>
  )
}

export default WsEmpty

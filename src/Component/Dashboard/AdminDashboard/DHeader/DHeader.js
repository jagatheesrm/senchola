import React from 'react'
import {MdNotificationsActive} from "react-icons/md"
import Profile from '../DImages/pro.jpg';
import './DHeader.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='welcome'>
            <h3>Senchola Guys</h3>
            <p>Hello,welcome Back</p>
        </div>
        <div className='Dprofile'>
            <i><MdNotificationsActive/></i>
            <div className='img'>
                <img src={Profile} alt='Profile' className='img img-fluid'/>
            </div>
        </div>
    </div>
  )
}

export default Header

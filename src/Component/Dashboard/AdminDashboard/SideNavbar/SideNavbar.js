import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { HiOutlineLogout } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import "./SideNavbar.css"
const SideNavbar = () => {
  return (
    <div className='Dnavbar'>
      <div className='Dlogo'>
        <span class="Dtitle">Senchola</span>
      </div>

      <div className='Dmenu'>
        <NavLink to="/" className='Dmenu-list'>
          <i><AiFillHome /></i>
          <span>Dashboard</span>
        </NavLink>
        
      </div>

      <div className='info'>
        <NavLink to="/info" className="info-list">
          <i><BiSolidHelpCircle /></i>
          <span>Info</span>
        </NavLink>
        <NavLink to="/" className="info-list">
          <i><HiOutlineLogout /></i>
          <span onClick={()=>{localStorage.removeItem('token')}}>Logout</span>
        </NavLink>
      </div>
    </div>
  )
}

export default SideNavbar

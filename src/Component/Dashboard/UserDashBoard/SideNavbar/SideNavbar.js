import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { SiGoogleclassroom } from 'react-icons/si'
import { AiFillSchedule, AiFillSetting } from 'react-icons/ai'
import { TiGroup } from 'react-icons/ti'
import { GiUpgrade } from 'react-icons/gi'
import { BiSolidMessageAltDetail, BiSolidHelpCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
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
        <NavLink to="/class" className='Dmenu-list'>
          <i><SiGoogleclassroom /></i>
          <span>class</span>
        </NavLink>
        <NavLink to="/schedule" className='Dmenu-list'>
          <i><AiFillSchedule /></i>
          <span>Schedule</span>
        </NavLink>
        <NavLink to="/group" className='Dmenu-list'>
          <i><TiGroup /></i>
          <span>Group</span>
        </NavLink>
        <NavLink to="/grade" className='Dmenu-list'>
          <i><GiUpgrade /></i>
          <span>Grade</span>
        </NavLink>
        <NavLink to="/team" className='Dmenu-list'>
          <i><BiSolidMessageAltDetail /></i>
          <span>Team </span>
        </NavLink>
        <NavLink to="/setting" className='Dmenu-list'>
          <i><AiFillSetting /></i>
          <span>Setting</span>
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

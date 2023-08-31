import React from 'react'
import { AiFillHome, AiFillSchedule, AiFillSetting } from 'react-icons/ai'
import { BiSolidHelpCircle, BiSolidMessageAltDetail } from 'react-icons/bi'
import { GiUpgrade } from 'react-icons/gi'
import { HiOutlineLogout } from 'react-icons/hi'
import { SiGoogleclassroom } from 'react-icons/si'
import { TiGroup } from 'react-icons/ti'
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
        <NavLink to="/logout" className="info-list">
          <i><HiOutlineLogout /></i>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  )
}

export default SideNavbar

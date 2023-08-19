import React from 'react'
import Dashboard from '../MainPages/Dashboard'
import Head from '../DHeader/DHeader'
import SideNavBar from "../SideNavbar/SideNavbar"
import "./Main.css"
const MainPage = () => {
  return (
    <div className='app'>
      <div className='nav'>
      <SideNavBar />
      </div>
      <div className='con'>
      <Head />
      <Dashboard />
      </div>
    </div>
  )
}

export default MainPage

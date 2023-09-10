import React from 'react'
import Head from '../DHeader/DHeader'
import Admindashboard from '../MainPages/admindashboard'
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
      <Admindashboard />
      </div>
    </div>
  )
}

export default MainPage

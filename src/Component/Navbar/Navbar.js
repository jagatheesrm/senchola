import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  


  return (
   
    <nav className="navbar">
      <div className="navbar-brand">Senchola university<span className='text text-success'>.</span></div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-center" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link text-center" onClick={toggleMenu}>About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link text text-center" onClick={toggleMenu}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/senheader" className="nav-link text-center" onClick={toggleMenu}>Why Senchola</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/form" className="nav-link text-center" onClick={toggleMenu}>Form</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link text-center" onClick={toggleMenu}>contact us</NavLink>
          </li>
          <li className='bn nav-item'>
            <NavLink to="/login" className="nav-link" onClick={toggleMenu}>login</NavLink>
          </li>
          {/* <li className='bn bn-success nav-item'>
            <NavLink to="/signup" className="nav-link" onClick={toggleMenu}>Sign up</NavLink>
          </li> */}
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'active' : ''}`} />
        <div className={`line ${isOpen ? 'active' : ''}`} />
        <div className={`line ${isOpen ? 'active' : ''}`} />
      </div>
    </nav>
  );
};

export default Navbar;
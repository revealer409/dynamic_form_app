import React, { useState } from 'react'
import './Nav.css';
import logo from '../../../logo.svg';
import { Link } from 'react-router-dom';



const KNavbar: React.FC =()=> {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const serviceDropdownOptions = ['Cruise Transfer', 'Tour'];
  return (
    <nav className="k-navbar" >
    <div className="logo">
     <Link to="/" > <img src={logo} style={{width:'100px',height:'40px'}} alt="Logo" /></Link>
    </div>
   <div className="k-nav-links">
   <div className={`links ${isMobileMenuOpen ? 'open' : ''}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
     
      {/* <Link to="/service">Service</Link> */}

       
    </div>
   </div>
    <div className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
  </nav>
  )
}

export default KNavbar
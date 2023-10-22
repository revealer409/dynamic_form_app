import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../logo.svg';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <Link className="navbar-brand" to="/"><img src={logo} style={{width:'100px',height:'40px'}} className="App-logo" alt="logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/faq">FAQ</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Cruise Transfer</a>
          <a className="dropdown-item" href="#">Tour</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Ride</a>
        </div>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    <a className="badge badge-primary " href="#">Theme Icon</a>
  </div>
</nav>
  )
}

export default Navbar
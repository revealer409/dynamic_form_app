import React from 'react'
//  import logo from '../../../logo.svg';
// import { Stack ,Container,Row ,Col} from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import KNavbar from '../navbar/KNavbar';
// import styled from 'styled-components'
// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #BF4F74;
//   color: #BF4F74;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `
const headerStyle = {
  color: "white",
  //width:'100%',
  //flex:'1',
  backgroundColor: "DodgerBlue",
  padding: "10px 0px",
  fontFamily: "Arial",
 
};

const Header:React.FC=()=> {
 
  return ( 
    //  <div className='main-header' style={headerStyle}>
     <div>
      <KNavbar  />
     {/* <Navbar /> */}
      {/* <Stack direction="horizontal" gap={3}>
      <div className='logo col-md-4' style={{width:'150px'}} >
        <img src={logo} style={{width:'100px',height:'40px'}} className="App-logo" alt="logo" />
        </div>
        <div style={{width:'750px'}} className='title col-md-8'>Jockey Journey</div>      
    
     </Stack> */}
    </div>
  )
}

export default Header
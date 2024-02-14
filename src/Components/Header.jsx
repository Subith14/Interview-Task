
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from '../assets/real-estate-house.png'
import './Common.css'




function Header() {
  return (
    <>
    {/* Header */}

       <Navbar className="bg-body-secondary ">
        <Container style={{height:"50px",}}>
          <Navbar.Brand href="/">
            <img id='imgheader'
              alt="Logo"
              src={logo}
              width='140px'
              height='140px'
            />{' '}
          </Navbar.Brand>
          <div>
            <h3 id='heading'>XYZ- SYSTEMS LLP.</h3>
           </div>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
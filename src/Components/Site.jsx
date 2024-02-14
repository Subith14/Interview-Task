import React from 'react'
import './Common.css'
import { Col, Row } from 'react-bootstrap'
import frame from '../assets/membership.jpg'
import Carosal from './Carosal'
import { Link } from 'react-router-dom'




function Site() {
  return (
    <>
{/* Links */}

<div className='links'>
        <ul className="d-flex align-items-center justify-content-center list-unstyled">
          <li>Home</li>
          <li>Dash board</li>
          <li>Products</li>
          <li>Transaction</li>
          <li>Journal</li>
        </ul>
        <div className="text-center">
        <i class="fa-solid fa-user-tie fa-2x  text-primary"></i>
        <p>Joseph lazer</p>
        </div>
      </div>




    <div className="container">
      <h4>New Arrival</h4>
      <Row id='row'>
      <Col>
        <p style={{fontSize:'13px',fontWeight:'bold'}}>JOIN TODAY</p><p className='slash'></p>
        <div className='display-none align-items-center justify-content-center'>
        <img id='imglogo'  src={frame} alt="frame" width={'70%'} height={'420px'} />
        </div>
      
      <div>
        <Link id='button' to={'/site'} className='btn btn-light text-decoration-none text-primary mb-5 '>JOIN NOW</Link>
      </div>
     
      </Col>

      <Col >

      <Carosal/>

      </Col>
    </Row>
    </div>

    
    </>
  )
}

export default Site
import React from 'react'
import './Common.css'
import { Card, Carousel } from 'react-bootstrap'
import carousalimg1 from '../assets/img1.jpg'
import carousalimg2 from '../assets/img2.jpg'
import carousalimg3 from '../assets/img3.jpg'




function Carosal() {
  return (
    <>
    <div className="carousal">
        <p className='feature' style={{fontSize:'40px'}}>Unlock Premium Features Now</p>
        <div id='underline'  className='d-flex align-items-center'>
        <hr style={{width:'60px'}} /> <p className='fa-2x'>&#9884;</p>  <hr style={{width:'60px'}} />
        </div>
    </div>

    {/* Carousal  */}

    <Carousel id='carousal1'>
      <Carousel.Item className='d-flex'>
      <Card id='card'>
      <Card.Img variant="top" src={carousalimg1} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} />
      <Card.Body>
        
        <Card.Text className='carousaltext'>
          Discount On Meterials
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card id='card'>
      <Card.Img variant="top" src={carousalimg2} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} />
      <Card.Body>
        
        <Card.Text className='carousaltext' >
        Lower Interest Rates
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card id='card'>
      <Card.Img variant="top" src={carousalimg3} style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} />
      <Card.Body>
        
        <Card.Text className='carousaltext' >
          Interest free Payments
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>

    <div id='carousalbutton' className="d-flex flex-column align-items-center mt-4">
        <button id='btn1' className='btn mb-2'>UNLOCK NOW</button>
        <button id='btn2' className='btn mb-5'>DETAILS</button>
    </div>
    </>
  )
}

export default Carosal
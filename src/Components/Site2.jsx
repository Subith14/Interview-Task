import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './site2.css'
import image from '../assets/celeb.png'




function Site2() {
  return (
    <>
    <Container className='mt-5'>
     
    <Row>
      <Col sm={12} lg={6} xl={6}>
      <h1 className='mt-5 mb-5 text-info fa-3x'>Unlock Exclusive Benifits</h1>
      <Form>
      <Row className="mb-5">
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>PHONE NUMBER</Form.Label>
          <Form.Select className='input' defaultValue="Choose...">
            <option>+91 India</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control className='input2' type="number" placeholder="7305297087" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-5" controlId="formGridAddress1">
        <Form.Label>NAME</Form.Label>
        <Form.Control className='input' placeholder='Enter your name' />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formGridAddress2">
        <Form.Label>EMAIL [OPTIONAL]</Form.Label>
        <Form.Control className='input' placeholder='Enter your email' />
      </Form.Group>

      <Button  variant="info" type="submit" className='button w-100'>
        CONTINUE 
      </Button>
      <div className="reminder">
      <p>Get ready to recive a secret code (OTP) on your phone</p>
      </div>
      
    </Form>
      </Col>
      <Col>
      <img src={image} width={'100%'} height={'650px'} alt="" />
      </Col>
    </Row>

    </Container>
    
    </>
  )
}

export default Site2
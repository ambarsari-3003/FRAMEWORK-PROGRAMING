import React from 'react'
import {Container, Card} from 'react-bootstrap'

function Contact() {
  return (
    <Container fluid className="bg-dark mt-7">
      <div className='d-flex justify-content-center'>
        <Card style={{ width: '20rem' }}>
          <Card.Body className="text-center">
            <Card.Title><b>AMBARSARI</b></Card.Title>
            <Card.Text>NIM 2110038</Card.Text>
            <Card.Text>ambarsariyy@gmail.com</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default Contact
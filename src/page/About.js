import React from 'react'
import { Carousel, Button, Card } from 'react-bootstrap'
import crown2 from '../assets/crown2.jpg'
import light from '../assets/light.jpg'

function About() {
  return (
    <React.Fragment>
      <Carousel fade>

        <Carousel.Item>
          <img
            className="img-fluidd-block w-100"
            src={crown2}
            alt="First slide"
            height="700"
          />
          <Carousel.Caption>
            <h3>Life isn't perfect, but your accessories can be.</h3>
            <p><b>AMSA</b></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="img-fluidd-block w-100"
            src={light}
            alt="Second slide"
            height="700"
          />
          <Carousel.Caption>
            <h3><b>Tentang Kami</b></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="text-center bg-dark text-white" >
        <Card.Header>Hubungi Kami</Card.Header>
        <Card.Body>
          <Card.Title><b>AMSA</b></Card.Title>
          <Card.Text>
            Melayani anda 24 jam untuk informasi apapun terkait produk kami.
          </Card.Text>
          <Button variant="primary" href="https://web.whatsapp.com/089673758785">Hubungi Sekarang</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default About

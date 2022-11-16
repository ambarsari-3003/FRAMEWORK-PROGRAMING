import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import List from './List';
import About from './About';
import cincin4 from '../assets/cincin4.jpg';
import cincin2 from '../assets/cincin2.jpg';
import cincin5 from '../assets/cincin5.jpg';

function Home() {
  return (
    <>
      <div className='bg-dark'>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="img-fluidd-block w-100"
                src={cincin4}
                alt="First slide"
                height="500"
              />
              <Carousel.Caption>
                <h3>Steila Black</h3>
                <p>Rp.2.000.000,-</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cincin2}
                alt="Second slide"
                height="500"
              />
              <Carousel.Caption className='text-dark'>
                <h3>Black Gradie</h3>
                <p>Rp.3.000.000,-</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cincin5}
                alt="Third slide"
                height="500"
              />
              <Carousel.Caption>
                <h3>Blue Crush</h3>
                <p>Rp.3.000.000,-</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <List />
        <About />
      </div>
    </>
  )

}

export default Home

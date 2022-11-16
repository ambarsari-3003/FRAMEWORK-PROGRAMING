import React from 'react'
import { Container, Button, Card, CardGroup, Pagination } from 'react-bootstrap'
import cincin1 from '../assets/cincin1.jpg'
import cincin2 from '../assets/cincin2.jpg'
import cincin3 from '../assets/cincin3.jpg'
import cincin4 from '../assets/cincin4.jpg'
import cincin5 from '../assets/cincin5.jpg'
import cincin6 from '../assets/cincin6.jpg'
import cincin7 from '../assets/cincin7.jpg'
import cincin8 from '../assets/cincin8.jpg'
import cincin9 from '../assets/cincin9.jpg'
import cincin10 from '../assets/cincin10.jpg'
import cincin11 from '../assets/cincin11.jpg'
import cincin12 from '../assets/cincin12.png'


function List() {
    return (

        <Container className='mt-5'>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top-center" src={cincin1} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Loviz Charm</Card.Title>
                        <Card.Text>Rp.1.500.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin2} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Black Gradie</Card.Title>
                        <Card.Text>Rp.3.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin3} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Butterfly Hao</Card.Title>
                        <Card.Text>Rp.1.500.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin4} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Steila Black</Card.Title>
                        <Card.Text>Rp.2.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top-center" src={cincin5} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Blue Crush</Card.Title>
                        <Card.Text>Rp.3.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin6} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Love Rock</Card.Title>
                        <Card.Text>Rp.1.500.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin7} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Love Lone</Card.Title>
                        <Card.Text>Rp.1.500.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin8} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Black Rose</Card.Title>
                        <Card.Text>Rp.2.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top-center" src={cincin9} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Blue Bloom</Card.Title>
                        <Card.Text>Rp.2.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin10} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Blue Chram</Card.Title>
                        <Card.Text>Rp.2.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin11} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Blue Craw</Card.Title>
                        <Card.Text>Rp.3.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top-center" src={cincin12} height="250" />
                    <Card.Body className="text-center">
                        <Card.Title>Black Tan</Card.Title>
                        <Card.Text>Rp.3.000.000,-</Card.Text>
                        <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <Pagination>
                <Pagination.Item active><a class="link text-dark" href="List">1</a></Pagination.Item>
                <Pagination.Item active><a class="link text-dark" href="List2">2</a></Pagination.Item>
            </Pagination>
        </Container>


    )
}


export default List

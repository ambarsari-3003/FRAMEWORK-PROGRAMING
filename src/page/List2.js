import React from 'react'
import { Container, Button, Card, CardGroup, Pagination } from 'react-bootstrap'
import kalung1 from '../assets/kalung1.jpg'
import kalung2 from '../assets/kalung2.jpg'
import kalung3 from '../assets/kalung3.jpg'
import kalung4 from '../assets/kalung4.jpg'
import kalung5 from '../assets/kalung5.png'
import kalung6 from '../assets/kalung6.jpg'
import kalung7 from '../assets/kalung7.jpg'
import kalung8 from '../assets/kalung8.jpg'
import kalung9 from '../assets/kalung9.jpg'
import kalung10 from '../assets/kalung10.jpg'
import kalung11 from '../assets/kalung11.jpg'
import kalung12 from '../assets/kalung12.jpg'

function List2() {
    return (
        <div className='bg-dark'>
            <Container>
                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top-center" src={kalung1} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Leomi SET</Card.Title>
                            <Card.Text>Rp.3.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung2} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Neu Musica</Card.Title>
                            <Card.Text>Rp.2.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung3} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Crystale</Card.Title>
                            <Card.Text>Rp.3.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung4} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Loem Dream</Card.Title>
                            <Card.Text>Rp.1.500.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                </CardGroup>

                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top-center" src={kalung5} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Cricky Xaoblack</Card.Title>
                            <Card.Text>Rp.1.500.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung6} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Moon Shire</Card.Title>
                            <Card.Text>Rp.3.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung7} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Light Skiblue</Card.Title>
                            <Card.Text>Rp.1.500.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung8} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Guitareozi</Card.Title>
                            <Card.Text>Rp.1.500.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                </CardGroup>

                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top-center" src={kalung9} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Sadda Moona</Card.Title>
                            <Card.Text>Rp.3.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung10} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Plue Netta</Card.Title>
                            <Card.Text>Rp.2.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung11} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Galaxy Byle</Card.Title>
                            <Card.Text>Rp.3.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top-center" src={kalung12} height="250" />
                        <Card.Body className="text-center">
                            <Card.Title>Monalaxy Geu</Card.Title>
                            <Card.Text>Rp.3.000.000,-</Card.Text>
                            <Button variant="dark"><a class="link text-light" href="Forms">Buy</a></Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <Pagination>
                    <Pagination.Item active><a class="page-link" href="List">1</a></Pagination.Item>
                    <Pagination.Item active><a class="page-link" href="List2">2</a></Pagination.Item>
                </Pagination>
            </Container>
        </div>

    )
}


export default List2

import { React, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


export default function Forms() {
    const [inputs, setInputs] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [product, setProduct] = useState("");
    const [discount, setDiscount] = useState("");
    const [price, setPrice] = useState("");
    const [sisa, setSisa] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const changeProduct = (newProduct) => {
        setProduct(newProduct);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setName(inputs.name);
        setProduct(inputs.product);
        setAmount(inputs.amount);
        let discount = 0.1 * price;
        let sisa = parseInt(inputs.price) - parseInt(inputs.amount);
        setSisa(sisa);
    }

    return (
        <>
            <div className='bg-dark'>
                <Container className='bg-light rounded'>
                    <Row>
                        <Form onSubmit={handleSubmit}>
                            <h2 className='mt-5 text-center'>
                                <b>CHECK OUT</b>
                            </h2>
                            <Form.Group className="form-grup mb-4" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Select</Form.Label>
                                <Form.Select
                                    onChange={(event) => changeProduct(event.target.value)}
                                    value={product}>
                                    <option>Ring</option>
                                    <option value="Loviz Charm">Loviz Charm</option>
                                    <option value="Black Gradie">Black Gradie</option>
                                    <option value="Butterfly Hao">Butterfly Hao</option>
                                    <option value="Steila Black">Steila Black</option>
                                    <option value="Blue Crush">Blue Crush</option>
                                    <option value="Love Rock">Love Rock</option>
                                    <option value="Love Lone">Love Lone</option>
                                    <option value="Black Rose">Black Rose</option>
                                    <option value="Blue Bloom">Blue Bloom</option>
                                    <option value="Blue Chram">Blue Chram</option>
                                    <option value="Blue Craw">Blue Craw</option>
                                    <option value="Black Tan">Black Tan</option>
                                </Form.Select>
                                <Form.Select
                                    onChange={(event) => changeProduct(event.target.value)}
                                    value={product}>
                                    <option>Necklace</option>
                                    <option value="Leomi SET">Leomi SET</option>
                                    <option value="Neu Musica">Neu Musica</option>
                                    <option value="Crystale">Crystale</option>
                                    <option value="Loem Dream">Loem Dream</option>
                                    <option value="Cricky Xaoblack">Cricky Xaoblack</option>
                                    <option value="Moon Shire">Moon Shire</option>
                                    <option value="Light Skiblue">Light Skiblue</option>
                                    <option value="Guitareozi">Guitareozi</option>
                                    <option value="Sadda Moona">Sadda Moona</option>
                                    <option value="Plue Netta">Plue Netta</option>
                                    <option value="Galaxy Byle">Galaxy Byle</option>
                                    <option value="Monalaxy Geu">Monalaxy Geu</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Qty</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="amount"
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    name="price"
                                    onChange={handleChange}

                                />
                            </Form.Group>

                            <Button
                                className="col-12 mx-auto mb-5"
                                type="submit"
                            >
                                SUBMIT
                            </Button>
                        </Form>
                    </Row>

                    <Container>
                        <Row>
                            <Col lg={6} xs={6} className="ml-2">Name</Col>
                            <Col lg={6} xs={6}>{name}</Col>
                        </Row>
                        <Row>
                            <Col lg={6} xs={6} className="ml-2">Product</Col>
                            <Col lg={6} xs={6}>{product}</Col>
                        </Row>
                        <Row>
                            <Col lg={6} xs={6} className="ml-2">Qty</Col>
                            <Col lg={6} xs={6}>{amount}</Col>
                        </Row>
                        <Row>
                            <Col lg={6} xs={6} className="result-text ml-2">Price</Col>
                            <Col lg={6} xs={6}>{price}</Col>
                        </Row>
                        <Row>
                            <Col lg={6} xs={6} className="result-text ml-2">Discount</Col>
                            <Col lg={6} xs={6}>{discount}</Col>
                        </Row>
                        <Row>
                            <Col lg={6} xs={6} className="result-text ml-2">Kembali</Col>
                            <Col lg={6} xs={6}>{sisa}</Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    )
}

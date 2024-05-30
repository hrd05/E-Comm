
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await fetch('https://react-http-9080f-default-rtdb.firebaseio.com/userData.json', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
        const data = await response.json();
        console.log(data);
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
        // Add form submission logic here
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="justify-content-md-center w-100">
                <Col md={6}>
                    <Card className="shadow p-4">
                        <Card.Body>
                            <h2 className="text-center mb-4">Contact Us</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName" className='my-4'>
                                    {/* <Form.Label>Name</Form.Label> */}
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className='my-4'>
                                    {/* <Form.Label>Email</Form.Label> */}
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPhone" className='my-4'>
                                    {/* <Form.Label>Phone Number</Form.Label> */}
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                    />
                                </Form.Group>

                                <Button variant="dark" type="submit" className="w-100">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;

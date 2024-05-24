import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './AlbumList.css';

{/* <Card className="shadow-lg" style={{ width: '250px', height: '400px' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Subtitle className="text-muted">{product.price + '$'}</Card.Subtitle>
                        <Button variant="primary">Add to Cart</Button>
                    </div>
                </Card.Body>
            </Card> */}

const AlbumList = (props) => {
    const albumList = props.productsArr.map((product) => (
        <Col key={product.id} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.imageUrl} style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
                    <Card.Text className="d-flex justify-content-between align-items-center mt-2">
                        <span>{product.price + '$'}</span>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));


    return (
        <Container className="mt-3">
            <Row className="mb-4">
                <Col className="text-center">
                    <h1 className="fw-bold">MUSIC</h1>
                </Col>
            </Row>
            <Row xs={1} md={2}>
                {albumList}
            </Row>
        </Container>
    );
};

export default AlbumList;

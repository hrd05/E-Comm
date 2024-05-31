import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './AlbumList.css';
import CartContext from '../Store/cart-context';
import AuthContext from '../Store/auth-context';
import { addToCart } from '../Utils/cartUtils';
// const itemIndex = cartCtx.cartItems.findIndex((item) => item.id === event.target.id);
// if (itemIndex < 0) {

//     const item = props.productsArr.find((item) => item.id === event.target.id);
//     item['quantity'] = 1;
//     cartCtx.addToCart(item);
// }
// else {
//     cartCtx.updateQuantityOfItem(event.target.id);
// }

const AlbumList = (props) => {

    // const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const productArr = props.productsArr;
    // console.log(productArr);

    const addToCartHandler = async (event) => {
        const item = productArr.find((item) => item.id === event.target.id);
        console.log(item);
        addToCart(authCtx.email, item);
    }


    const albumList = props.productsArr.map((product) => (
        <Col key={product.id} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.imageUrl} style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
                    <Card.Text className="d-flex justify-content-between align-items-center mt-2">
                        <span>{product.price + '$'}</span>
                        <Button id={product.id} onClick={addToCartHandler} variant="primary">Add to Cart</Button>
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

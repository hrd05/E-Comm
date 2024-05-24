import { useState } from "react";
import { Container, Navbar, Nav, Button, Modal, Image } from "react-bootstrap";
import image from "../../Picture/apple-touch-icon.png";
import "./NavbarComponent.css";

const NavbarComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cart = {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    };

    return (
        <>
            <Navbar fixed="top" expand="md" className="navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={image}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        GrooveNest
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Store</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Button variant="outline-light " onClick={handleShow}>
                                Cart <span className="badge bg-light text-dark">{cart.quantity}</span>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="heading" className="mt-5 p-3">
                <h1>GrooveNest <span>"Find Your Groove"</span></h1>
            </div>

            <Modal show={show} onHide={handleClose} animation={false} className="modal-right">
                <Modal.Header closeButton>
                    <Modal.Title>Cart Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center">
                        <Image src={cart.imageUrl} rounded style={{ width: '100px', height: '100px' }} />
                        <div className="ms-3">
                            <h5>{cart.title}</h5>
                            <p>Price: ${cart.price}</p>
                            <p>Quantity: {cart.quantity}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NavbarComponent;

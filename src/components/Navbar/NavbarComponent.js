import { useState, useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import image from "../../Picture/apple-touch-icon.png";
import "./NavbarComponent.css";
import CartModal from "./CartModal";
import CartContext from "../../Store/cart-context";
import { FaMusic } from "react-icons/fa"; // Import Font Awesome icon

const NavbarComponent = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartCtx = useContext(CartContext);

    let totalAmount = 0;
    let cartQuantity = 0;

    cartCtx.cartItems.forEach((item) => {
        totalAmount += (Number(item.price) * Number(item.quantity));
        cartQuantity += Number(item.quantity);
    })


    return (
        <>
            <Navbar fixed="top" expand="md" className="navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
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
                        <Nav className="align-content-center mx-5">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/store">Store</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {location.pathname !== '/about' && (
                        <Button variant="outline-light" onClick={handleShow}>
                            Cart <span className="badge bg-light text-dark">{cartQuantity}</span>
                        </Button>
                    )}
                </Container>
            </Navbar>
            <div id="heading" className="mt-5 p-3">
                <h1 className="mt-4">GrooveNest <span>"Find Your Groove"</span></h1>
                {location.pathname === '/home' && (
                    <>
                        <Button variant="outline-light" className="mt-3" >Get our Latest Album</Button><br />
                        <Button variant="light" className="mt-3" >
                            <FaMusic /> {/* Music symbol icon */}
                        </Button>
                    </>

                )}
            </div>
            <CartModal totalAmount={totalAmount} show={show} onHide={handleClose} />

        </>
    );
};

export default NavbarComponent;

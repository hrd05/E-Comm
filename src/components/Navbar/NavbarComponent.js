import { useState, useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import image from "../../Picture/apple-touch-icon.png";
import "./NavbarComponent.css";
import CartModal from "./CartModal";
import CartContext from "../../Store/cart-context";

const NavbarComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartCtx = useContext(CartContext);

    let totalAmount = 0;
    let cartQuantity = 0;

    cartCtx.cartItems.forEach((item) => {
        totalAmount += (Number(item.price) * Number(item.quantity));
        cartQuantity += Number(item.quantity);
    })

    console.log(totalAmount);

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
                                Cart <span className="badge bg-light text-dark">{cartQuantity}</span>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="heading" className="mt-5 p-3">
                <h1>GrooveNest <span>"Find Your Groove"</span></h1>
            </div>
            <CartModal totalAmount={totalAmount} show={show} onHide={handleClose} />

        </>
    );
};

export default NavbarComponent;

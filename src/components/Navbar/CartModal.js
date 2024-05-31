import { Modal, Button, Image } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import AuthContext from "../../Store/auth-context";
import { getCart } from "../../Utils/cartUtils";



const CartModal = (props) => {
    const [cartItems, setCartItems] = useState([]);
    // const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const fetchCart = async () => {
            const items = await getCart(authCtx.email);
            setCartItems(items);
        }
        fetchCart();
    }, [authCtx.email, props.show])


    const cartList = cartItems.map((item) => (
        <div key={item.id} className="d-flex align-items-center">
            <Image src={item.imageUrl} rounded style={{ width: '100px', height: '100px' }} />
            <div className="ms-3">
                <h5>{item.title}</h5>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
        </div>
    ))


    return (
        <Modal show={props.show} onHide={props.onHide} animation={false} className="modal-right">
            <Modal.Header closeButton>
                <Modal.Title>Cart Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartList}
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between align-items-center">
                <h5>{`Total: $ ${props.totalAmount}`}</h5>
                {/* <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button> */}
                <Button variant="primary">
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default CartModal;
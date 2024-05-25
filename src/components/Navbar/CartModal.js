import { Modal, Button, Image } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";


// const cartElements = [

//     {
//         id: '1',
//         title: 'Colors',
//         price: 100,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//         quantity: 2,
//     },
//     {
//         id: '2',
//         title: 'Black and white Colors',
//         price: 50,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//         quantity: 3,
//     },
//     {
//         id: '3',
//         title: 'Yellow and Black Colors',
//         price: 70,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//         quantity: 1,
//     }
// ]
// let q = 0;
// cartElements.forEach((item) => {
//     q += item.quantity;
// })


const CartModal = (props) => {
    const cartCtx = useContext(CartContext);

    const cartList = cartCtx.cartItems.map((item) => (
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
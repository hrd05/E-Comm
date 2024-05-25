import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [cartItems, setCart] = useState([]);

    const addToCartHandler = (item) => {
        setCart((prevCart) => {
            return [...prevCart, item];
        })
    }

    const updateQuantityOfItemHandler = (id) => {
        const existingIndex = cartItems.findIndex((item) => item.id === id);
        // console.log(existingIndex);
        if (existingIndex >= 0) {
            const updatedCart = [...cartItems];
            updatedCart[existingIndex].quantity += 1;
            setCart(updatedCart);
        }
    }


    const cartContext = {
        cartItems: cartItems,
        addToCart: addToCartHandler,
        updateQuantityOfItem: updateQuantityOfItemHandler
    }


    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;


import React from "react";

const CartContext = React.createContext({
    cartItems: [],
    addToCart: (product) => { },
    updateQuantityOfItem: (id) => { }
})

export default CartContext;
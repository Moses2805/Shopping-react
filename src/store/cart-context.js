import React from "react";

const CartContext = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addItemToCart: (item) => {},
    removeFromCart: (id) => {},
    incrementPrice: (name) => {},
    decrementPrice: (name) => {}
});
export default CartContext
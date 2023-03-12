import React from "react";

const CartContext = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addItemToCart: (item) => {},
    removeFromCart: (id) => {},
    incrementPrice: (name, price) => {},
    decrementPrice: (name) => {}
});
export default CartContext
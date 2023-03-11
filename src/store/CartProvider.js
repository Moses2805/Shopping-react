import { useState } from "react"
import CartContext from "./cart-context"

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // increment of amount

    const incrementPrice = (name) => {

        let choosingAmount = cartItems.find((currentItem) => currentItem.name === name)
        choosingAmount.amount++

        setCartItems([...cartItems])
        setTotalAmount(c => c + 1)
    }

    // decrement of amount

    const decrementPrice = (name) => {

        let choosingAmount = cartItems.find((currentItem) => currentItem.name === name)

        if(choosingAmount.amount > 1){
            choosingAmount.amount--;
            setCartItems([...cartItems])
            setTotalAmount(c => c - 1)
        } else{
        const choosingDelElem = cartItems.filter(currentItem => currentItem.name !== name)
        console.log(choosingDelElem)
            setCartItems(choosingDelElem)
        }

    }


    // adding item to card

    const addItemToCart = (item) => {
        console.log(item.id)

        const findItem = cartItems.findIndex((currentItem) => currentItem.id === item.id);
        if (findItem === -1) {
            setCartItems([...cartItems, item])

        } else {
            const findClickedElement = cartItems.find((currentItem) => currentItem.id === item.id);
            console.log(findClickedElement)
            findClickedElement.amount = findClickedElement.amount + item.amount;
            console.log(findClickedElement.amount);
            setCartItems([...cartItems])

        }

        setTotalAmount(c => c + item.amount)

    }

    // remove all items from card
    const removeFromCart = () => {
        setCartItems([])
    }
    return <CartContext.Provider value={{
        cartItems,
        totalAmount,
        addItemToCart,
        removeFromCart,
        incrementPrice,
        decrementPrice
    }}>
        {children}
    </CartContext.Provider>
}

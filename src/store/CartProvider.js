import { useState } from "react"
import CartContext from "./cart-context"

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // increment of amount

    const incrementPrice = (name, price) => {

        let choosingAmount = cartItems.find((currentItem) => currentItem.name === name)
        choosingAmount.amount++;

        choosingAmount.price = Number(choosingAmount.price.slice(1));

        choosingAmount.changingPrice = Number(choosingAmount.changingPrice.slice(1))

        choosingAmount.price = (choosingAmount.price + choosingAmount.changingPrice).toFixed(2);
        choosingAmount.price = "$" + choosingAmount.price
        choosingAmount.changingPrice = "$" + choosingAmount.changingPrice


        setCartItems([...cartItems])
        setTotalAmount(c => c + 1)
    }

    // decrement of amount

    const decrementPrice = (name) => {

        let choosingAmount = cartItems.find((currentItem) => currentItem.name === name)

        if(choosingAmount.amount > 1){
            choosingAmount.amount--;


            choosingAmount.price = Number(choosingAmount.price.slice(1));

            choosingAmount.changingPrice = Number(choosingAmount.changingPrice.slice(1))
    
            choosingAmount.price = (choosingAmount.price - choosingAmount.changingPrice).toFixed(2);
            choosingAmount.price = "$" + choosingAmount.price
            choosingAmount.changingPrice = "$" + choosingAmount.changingPrice
    
            setCartItems([...cartItems])
            setTotalAmount(c => c - 1)
        } else{
        const choosingDelElem = cartItems.filter(currentItem => currentItem.name !== name)
            setCartItems(choosingDelElem)
        }

    }


    // adding item to card

    const addItemToCart = (item) => {

        if(item.amount > 0) {
            const findItem = cartItems.findIndex((currentItem) => currentItem.id === item.id);
            item.price = Number(item.price.slice(1))

            if (findItem === -1) {


                item.price = item.price * item.amount

                item.price = "$" + item.price

                setCartItems([...cartItems, item])
    
            } else {
                let findClickedElement = cartItems.find((currentItem) => currentItem.id === item.id);
                findClickedElement.amount = findClickedElement.amount + item.amount;

                findClickedElement.price = Number(findClickedElement.price.slice(1))

                findClickedElement.price = item.price * findClickedElement.amount;
                findClickedElement.price = "$" + findClickedElement.price

                setCartItems([...cartItems])
    
            }

    
            setTotalAmount(c => c + item.amount)
        }



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

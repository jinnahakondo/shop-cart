
import { useReducer } from 'react';
import { CartContext } from './cartContext'

const cart = JSON.parse(localStorage.getItem("cart")) || []
const initialState = {
    cart,
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case "CLEAR_CART":
            return { ...currentState, cart: [] };
        case "REMOVE_ITEM":
            return {
                ...currentState,
                cart: currentState.cart.filter(item => item.id !== action.payload)
            };
        case "INCREASE_QTY":
            return {
                ...currentState,
                cart: incrementQuantity(currentState.cart, action.payload)
            };
        case "DECREASE_QTY":
            return {
                ...currentState,
                cart: decrementQuantity(currentState.cart, action.payload)
            };
        case "ADD_ITEM":
            return {
                ...currentState,
                cart: [...currentState.cart, action.payload]
            };
        default: currentState;

    }
}


// increment quantity 
const incrementQuantity = (cart, id) => {
    return cart.map(item => item.id === id ?
        { ...item, quantity: item.quantity + 1 }
        : item
    )
}

// decrement quantity 
const decrementQuantity = (cart, id) => {
    return cart.map(item => item.id === id ?
        { ...item, quantity: item.quantity - 1 }
        : item
    )
}

export default function ContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext value={{ state, dispatch }}>
            {children}
        </CartContext>
    )
}

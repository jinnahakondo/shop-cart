
import { useEffect, useReducer } from 'react';
import { CartContext } from './cartContext'
import { cartData } from '../data/cart.data';


const initialData = JSON.parse(localStorage.getItem("cart"))
const cart = (initialData && initialData.length) > 0 ? initialData : cartData

const initialState = {
    cart
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
        default: return currentState;

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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }, [state.cart])

    const onIncrement = (id) => {
        dispatch({
            type: "INCREASE_QTY",
            payload: id
        })

    }


    const onDecrement = (id) => {
        dispatch({
            type: "DECREASE_QTY",
            payload: id
        })

    }

    const onRemoveItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })
    }

    const onAddItem = (item) => {
        const payload = {
            id: state.cart.length + 1,
            ...item,
        }

        dispatch({
            type: "ADD_ITEM",
            payload
        })
    }


    return (
        <CartContext value={{
            cart: state.cart,
            dispatch,
            onDecrement,
            onIncrement,
            onRemoveItem,
            onAddItem
        }}>
            {children}
        </CartContext>
    )
}

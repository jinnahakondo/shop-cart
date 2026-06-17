import { use } from 'react'
import { CartContext } from '../context/cartContext'

export default function useCartContext() {
    const context = use(CartContext)
    if (!context) {
        throw new Error("useMyContext must be used within a CartContext")
    }

    return context;
}

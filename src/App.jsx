
import { useReducer } from 'react'
import Cart from './components/cart/Cart'
import Header from './components/Header'
import OrderSummary from './components/OrderSummary/OrderSummary'



const initialState = {
  cart: [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "description": "High quality sound and long battery life.",
      "price": 120,
      "quantity": 1,
      "stockStatus": "In stock",
      "icon": "📦"
    },
    {
      "id": 2,
      "name": "Running Shoes",
      "description": "Lightweight shoes for daily training.",
      "price": 85,
      "quantity": 2,
      "stockStatus": "Low stock",
      "icon": "👟"
    },
    {
      "id": 3,
      "name": "Bluetooth Speaker",
      "description": "Portable sound for home and travel.",
      "price": 60,
      "quantity": 1,
      "stockStatus": "In stock",
      "icon": "🎧"
    }
  ]
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


export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div className='min-h-screen bg-slate-50 text-slate-800 '>
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <header>
          <Header />
        </header>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)]">
          <Cart items={state.cart} dispatch={dispatch} totalItem={state.cart.length} />
          <OrderSummary cart={state.cart} />
        </div>
      </main>
    </div>
  )
}

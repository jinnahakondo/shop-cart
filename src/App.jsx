
import Cart from './components/cart/Cart'
import Header from './components/Header'
import OrderSummary from './components/OrderSummary/OrderSummary'


export default function App() {

  return (
    <div className='min-h-screen bg-slate-50 text-slate-800 '>
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <header>
          <Header />
        </header>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)]">
          <Cart/>
          <OrderSummary />
        </div>
      </main>
    </div>
  )
}

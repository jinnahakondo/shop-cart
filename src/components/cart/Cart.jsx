
import useCartContext from '../../hook/useCartContext'
import AddCartItem from './AddCartItem'
import CartHeader from './CartHeader'
import Cartitem from './Cartitem'

export default function Cart() {
    const { cart } = useCartContext()
    return (
        <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <CartHeader />

            <div className="space-y-4">
                {cart.map(item => <Cartitem key={item.id} {...item} />)}
            </div>

            <div className='flex justify-center items-center mt-4'>
                <AddCartItem />
            </div>
        </section>
    )
}

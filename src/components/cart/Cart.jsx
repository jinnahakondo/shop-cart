
import CartHeader from './CartHeader'
import Cartitem from './Cartitem'

export default function Cart({ totalItem, items, dispatch }) {

    return (
        <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <CartHeader totalItem={totalItem} dispatch={dispatch} />

            <div className="space-y-4">
                {items.map(item => <Cartitem key={item.id} {...item} dispatch={dispatch} />)}
            </div>
        </section>
    )
}

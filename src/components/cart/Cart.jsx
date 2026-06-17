import React from 'react'
import CartHeader from './CartHeader'
import Cartitem from './Cartitem'

export default function Cart({items,dispatch}) {

    return (
        <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <CartHeader dispatch={dispatch}/>

            <div className="space-y-4">
                {items.map(item => <Cartitem key={item.id} {...item} dispatch={dispatch}/>)}
            </div>
        </section>
    )
}

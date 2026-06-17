import React from 'react'

export default function CartHeader({ dispatch }) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h2 className="text-xl font-semibold text-slate-900">Cart Items</h2>
                <p className="text-sm text-slate-500">3 items in your cart</p>
            </div>
            <button onClick={() => dispatch({
                type: "CLEAR_CART"
            })} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Clear Cart
            </button>
        </div>
    )
}

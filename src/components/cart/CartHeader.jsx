import useCartContext from "../../hook/useCartContext"


export default function CartHeader() {
    const { state, dispatch } = useCartContext()
    return (
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h2 className="text-xl font-semibold text-slate-900">Cart Items</h2>
                <p className="text-sm text-slate-500">{state.cart.length} items in your cart</p>
            </div>

            <button onClick={() => {
                dispatch({
                    type: "CLEAR_CART"
                })
                localStorage.removeItem("cart")
            }} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Clear Cart
            </button>
        </div>
    )
}

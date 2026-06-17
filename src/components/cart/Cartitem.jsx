import useCartContext from "../../hook/useCartContext"


export default function Cartitem({
    id,
    icon,
    name,
    description,
    price,
    quantity,
    stockStatus,
}) {

    const { state, dispatch } = useCartContext()

    const handleDecrement = (id) => {
        dispatch({
            type: "DECREASE_QTY",
            payload: id
        })

        const newItems = state.cart.map(item => item.id === id ? { ...item, quantity: Number(item.quantity - 1) } : item)
        localStorage.removeItem("cart")
        localStorage.setItem("cart", JSON.stringify(newItems))

    }

    const handleIncrement = (id) => {
        dispatch({
            type: "INCREASE_QTY",
            payload: id
        })

        const newItems = state.cart.map(item => item.id === id ? { ...item, quantity: Number(item.quantity + 1) } : item)
        
        localStorage.removeItem("cart")
        localStorage.setItem("cart", JSON.stringify(newItems))

    }

    const handleRemoveItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: id
        })

        const newItems = state.cart.filter(item => item.id !== id)
        localStorage.removeItem("cart")
        localStorage.setItem("cart", JSON.stringify(newItems))
    }

    return (
        <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
                {/* icon  */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                    {icon}
                </div>
                <div>
                    <h3 className="text-base font-semibold text-slate-900">{name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{description}</p>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">{stockStatus}</span>
                        <span className="text-sm font-medium text-slate-900">${price}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                <div className="flex items-center rounded-2xl border border-slate-200">

                    {/* decrement quantity */}
                    <button
                        disabled={quantity === 1}
                        onClick={() => handleDecrement(id)}
                        className="px-4 py-2 text-lg text-slate-600 hover:bg-slate-50">−</button>

                    {/* quantity */}
                    <span className="min-w-10 px-3 py-2 text-center text-sm font-medium">{quantity}</span>
                    {/* increment quantity */}
                    <button
                        onClick={() => handleIncrement(id)}
                        className="px-4 py-2 text-lg text-slate-600 hover:bg-slate-50">+</button>
                </div>

                {/* remove a item */}
                <button
                    onClick={() => handleRemoveItem(id)}
                    className="text-sm font-medium text-rose-600 hover:text-rose-700">Remove</button>
            </div>
        </article >
    )
}

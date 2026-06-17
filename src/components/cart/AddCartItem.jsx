import useCartContext from "../../hook/useCartContext"


export default function AddCartItem() {
    const { onAddItem } = useCartContext()

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const price = e.target.price.value
        const icon = e.target.icon.value
        const description = e.target.description.value
        const stockStatus = e.target.stockStatus.value
        const payload = { name, price, icon, description, stockStatus, quantity: 1, }

        onAddItem(payload)

        e.target.reset()
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-4 rounded-2xl w-full text-sm"
        >
            <div className="flex items-center gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    className="w-full rounded-xl border border-slate-200 p-2"
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="w-full rounded-xl border border-slate-200 p-2"
                    required
                />
            </div>

            <div className="flex items-center gap-6">
                <input
                    type="text"
                    name="icon"
                    placeholder="Icon"
                    className="w-full rounded-xl border border-slate-200 p-2"
                />

                <select
                    name="stockStatus"
                    className="w-full rounded-xl border border-slate-200 p-2"
                >
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                </select>
            </div>

            <textarea
                name="description"
                placeholder="Description"
                className="w-full rounded-xl border border-slate-200 p-2"
                required
            />

            <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 py-3 text-white"
            >
                Add To Cart
            </button>
        </form>
    )
}

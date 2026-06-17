import React from 'react'
import CartHeader from './CartHeader'
import Cartitem from './Cartitem'

export default function Cart() {

    const items = [
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

    return (
        <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
            <CartHeader />

            <div className="space-y-4">
                {items.map(item => <Cartitem key={item.id} {...item} />)}
            </div>
        </section>
    )
}

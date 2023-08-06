'use client';

import { useCartStore } from '@/context/cart';

export const CartBubble = () => {
    const cart = useCartStore((state) => state.products);

    return (
        <div className="fixed bottom-1 left-2 rounded-md bg-slate-400 px-10 py-5">
            <p className="font-bold">Carrito de compra</p>
            <ul className="list-disc">
                {cart.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

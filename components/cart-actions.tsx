'use client';

import { Button } from '@nextui-org/button';

import { WhatsAppIcon } from './icons';
import { useCartStore } from '@/context/cart';

export const CartActions = () => {
    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <section className="flex flex-row gap-3">
            <Button onClick={clearCart} color="danger">
                Vaciar carrito
            </Button>

            <Button color="primary" startContent={<WhatsAppIcon />}>
                Completar compra
            </Button>
        </section>
    );
};

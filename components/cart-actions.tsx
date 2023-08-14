'use client';

import { Button } from '@nextui-org/button';

import { WhatsAppIcon } from './icons';
import { useCartStore } from '@/context/cart';
import { formatCurrency } from '@/utils/format-currency';

export const CartActions = () => {
    const clearCart = useCartStore((state) => state.clearCart);
    const products = useCartStore((state) => state.products);

    const createOrder = () => {
        const message = `Hola, me gustaría comprar los siguientes productos: \n\n${products
            .map(
                (product) =>
                    `- ${product.title} -> ${formatCurrency(product.price)}`,
            )

            .join('\n')}`;

        window.open(
            `https://wa.me/${
                process.env.NEXT_PUBLIC_WHASTAPP_NUMBER
            }?text=${encodeURIComponent(message)}`,
            '_blank',
        );
    };

    return (
        <section className="flex flex-row gap-3">
            {products.length > 0 && (
                <>
                    <Button onClick={clearCart} color="danger">
                        Vaciar carrito
                    </Button>

                    <Button
                        color="primary"
                        onClick={createOrder}
                        startContent={<WhatsAppIcon />}
                    >
                        Completar compra
                    </Button>
                </>
            )}
        </section>
    );
};

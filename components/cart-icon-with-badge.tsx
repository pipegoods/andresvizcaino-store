'use client';

import { Badge } from '@nextui-org/badge';

import { CartIcon } from './icons';
import { useCartStore } from '@/context/cart';

export const CartIconWithBadge = () => {
    const cart = useCartStore((state) => state.products);
    const totalItems = cart.length;

    if (!totalItems) return <CartIcon />;

    return (
        <Badge color="danger" content={totalItems} shape="circle">
            <CartIcon />
        </Badge>
    );
};

'use client';

import { Button } from '@nextui-org/button';

import { CartIcon } from './icons';
import { useCartStore } from '@/context/cart';
import { Product } from '@/types/product';

interface CartButtonProps {
    product: Product;
}

export const CartButton = ({ product }: CartButtonProps) => {
    const addProduct = useCartStore((state) => state.addProduct);
    const deleteProduct = useCartStore((state) => state.deleteProduct);
    const isInCart = useCartStore((state) => state.isInCart(product.slug));

    const {
        color,
        onClick,
        copy,
    }: {
        color: 'primary' | 'danger';
        onClick: () => void;
        copy: string;
    } = {
        color: isInCart ? 'danger' : 'primary',
        onClick: isInCart
            ? () => deleteProduct(product)
            : () => addProduct(product),
        copy: isInCart ? 'Eliminar del carrito' : 'Agregar al carrito',
    };

    return (
        <Button
            onClick={onClick}
            color={color}
            className="mt-10"
            startContent={<CartIcon />}
        >
            {copy}
        </Button>
    );
};

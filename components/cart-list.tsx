'use client';

import { useEffect } from 'react';

import Link from 'next/link';

import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';

import { useCartStore } from '@/context/cart';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format-currency';

type CartListProps = {
    products: Product[];
};

export const CartList = ({ products }: CartListProps) => {
    const cart = useCartStore((state) => state.products);
    const deleteProduct = useCartStore((state) => state.deleteProduct);
    const updateProduct = useCartStore((state) => state.updateProduct);
    const totalItems = cart.length;

    useEffect(() => {
        if (cart.length === 0) return;

        cart.forEach((product) => {
            const productInCart = products.find((p) => p.id === product.id);

            if (!productInCart) return;

            if (productInCart.availability === false) {
                deleteProduct(productInCart);
                return;
            }

            updateProduct(productInCart);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <section className="flex flex-col gap-3">
            {totalItems > 0 ? (
                cart.map((product) => (
                    <article
                        key={product.slug}
                        className="flex w-full flex-row justify-between gap-10"
                    >
                        <div className="flex flex-row gap-3">
                            <div className="h-16 w-16">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width="100%"
                                    height="100%"
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Link href={`/product/${product.slug}`}>
                                    <p className="text-default-900">
                                        {product.title}
                                    </p>
                                </Link>
                                <p className="text-default-500">
                                    {formatCurrency(product.price)}
                                </p>
                            </div>
                        </div>

                        <Button onClick={() => deleteProduct(product)}>
                            Eliminar
                        </Button>
                    </article>
                ))
            ) : (
                <p className="text-default-500">
                    No hay productos en el carrito
                </p>
            )}
        </section>
    );
};

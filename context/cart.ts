import { Product } from '@/types/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
    products: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (product: Product) => void;
    isInCart: (slug: string) => boolean;
    clearCart: () => void;
    updateProduct: (product: Product) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            products: [],
            addProduct: (product) =>
                set((state) => {
                    // check if product already exists in cart
                    const productExists = state.products.find(
                        (p) => p.slug === product.slug,
                    );

                    if (productExists) return state;

                    return {
                        products: [...state.products, product],
                    };
                }),
            deleteProduct: (product) =>
                set((state) => ({
                    products: state.products.filter(
                        (p) => p.slug !== product.slug,
                    ),
                })),
            isInCart: (slug) => get().products.some((p) => p.slug === slug),
            clearCart: () => set({ products: [] }),
            updateProduct: (product) =>
                set((state) => {
                    const products = state.products.map((p) =>
                        p.slug === product.slug ? product : p,
                    );

                    return { products };
                }),
        }),
        {
            name: 'cart-storage',
        },
    ),
);

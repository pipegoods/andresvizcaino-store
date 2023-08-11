import { CartActions } from '@/components/cart-actions';
import { CartList } from '@/components/cart-list';
import { subtitle, title } from '@/components/primitives';
import { getProducts } from '@/services/product';

export default async function CartPage() {
    const products = await getProducts();

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg justify-center text-center">
                <h1 className={title()}>Carrito de compras</h1>
                <h2 className={subtitle({ class: 'mt-4' })}>
                    Revisa y completa tu compra
                </h2>
            </div>
            <CartList products={products} />
            <div className="my-10" />
            <CartActions />
        </section>
    );
}

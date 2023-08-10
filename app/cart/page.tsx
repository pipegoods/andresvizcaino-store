import { CartActions } from '@/components/cart-actions';
import { CartList } from '@/components/cart-list';
import { subtitle, title } from '@/components/primitives';

export default function CartPage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg justify-center text-center">
                <h1 className={title()}>Carrito de compras</h1>
                <h2 className={subtitle({ class: 'mt-4' })}>
                    Revisa y completa tu compra
                </h2>
            </div>
            <CartList />
            <div className="my-10" />
            <CartActions />
        </section>
    );
}

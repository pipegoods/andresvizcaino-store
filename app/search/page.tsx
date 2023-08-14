import Link from 'next/link';

import { Button } from '@nextui-org/button';
import { Code } from '@nextui-org/code';

import { CardProduct } from '@/components/card-product';
import { subtitle, title } from '@/components/primitives';
import { getProducts } from '@/services/product';

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { q: string };
}) {
    const { q } = searchParams;

    const products = await getProducts();

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(q.toLowerCase()),
    );

    return (
        <section>
            <h1
                className={subtitle({
                    class: 'mb-4',
                })}
            >
                Resultado para <Code size="lg">{q}</Code>
            </h1>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>

            {!filteredProducts.length && (
                <div className="flex flex-col gap-5 text-center">
                    <h2 className={title()}>No encontramos nada {':('}</h2>

                    <Link href="/">
                        <Button>Ir a la página principal</Button>
                    </Link>
                </div>
            )}
        </section>
    );
}

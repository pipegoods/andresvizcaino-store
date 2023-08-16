import Link from 'next/link';

import { Button } from '@nextui-org/button';
import { Code } from '@nextui-org/code';

import { CardProduct } from '@/components/card-product';
import { subtitle, title } from '@/components/primitives';
import { getProductsSearchByTitle } from '@/services/product';

export default async function SearchPage({
    searchParams,
}: {
    searchParams: { q: string };
}) {
    const { q } = searchParams;

    const products = await getProductsSearchByTitle({ search: q });

    const haveProducts = !!products.length;

    return (
        <section>
            <h1
                className={subtitle({
                    class: 'mb-4',
                })}
            >
                Resultado para <Code size="lg">{q}</Code>
            </h1>
            {haveProducts && (
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            )}

            {haveProducts && (
                <p className="mt-10">
                    Se encontraron <Code>{products.length}</Code> resultados
                </p>
            )}

            {!haveProducts && (
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

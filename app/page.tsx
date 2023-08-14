import Link from 'next/link';

import { Chip } from '@nextui-org/chip';

import { CardProduct } from '@/components/card-product';
import { subtitle, title } from '@/components/primitives';
import { getCategories } from '@/services/category';
import { getProducts } from '@/services/product';

export default async function Home({
    searchParams,
}: {
    searchParams: { category: string };
}) {
    const products = await getProducts();
    const categories = await getCategories();

    const filteredProducts = products.filter((product) => {
        if (!searchParams.category) return true;

        return product.category.slug === searchParams.category;
    });

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg justify-center text-center">
                <h1 className={title()}>Andrés Vizcaíno Store</h1>
                <h2 className={subtitle({ class: 'mt-4' })}>
                    Arma tu carrito y completa tu orden por WhatsApp
                </h2>
            </div>

            <article className="flex flex-row flex-wrap items-center justify-center gap-2">
                <Link href="/">
                    <Chip
                        variant={!searchParams.category ? 'solid' : 'flat'}
                        color={!searchParams.category ? 'primary' : 'default'}
                    >
                        Todos
                    </Chip>
                </Link>

                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={{
                            pathname: '/',
                            query: { category: category.slug },
                        }}
                        prefetch={false}
                    >
                        <Chip
                            variant={
                                searchParams.category === category.slug
                                    ? 'solid'
                                    : 'flat'
                            }
                            color={
                                searchParams.category === category.slug
                                    ? 'primary'
                                    : 'default'
                            }
                        >
                            {category.name}
                        </Chip>
                    </Link>
                ))}
            </article>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

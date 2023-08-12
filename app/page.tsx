import Link from 'next/link';

import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';

import { subtitle, title } from '@/components/primitives';
import { getCategories } from '@/services/category';
import { getProducts } from '@/services/product';
import { formatCurrency } from '@/utils/format-currency';

export default async function Home({
    searchParams,
}: {
    searchParams: { category: string };
}) {
    const products = await getProducts();
    const categories = await getCategories();

    console.log(searchParams);

    const filteredProducts = products.filter((product) => {
        if (!searchParams.category) return true;

        console.log(product.category.slug, ' === ', searchParams.category);

        return product.category.slug === searchParams.category;
    });

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg justify-center text-center">
                <h1 className={title()}>PC Gaming Colombia</h1>
                <h2 className={subtitle({ class: 'mt-4' })}>
                    Comprar hardware en Colombia nunca fue tan facíl
                </h2>
            </div>

            <article>
                <Link href="/">
                    <Chip
                        className="mr-2"
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
                            className="mr-2"
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
                    <Link key={product.id} href={`/product/${product.slug}`}>
                        <Card
                            shadow="sm"
                            className="relative w-full"
                            isPressable
                        >
                            {!product.availability && (
                                <Chip
                                    className="absolute right-2 top-2 z-20"
                                    variant="flat"
                                    color="danger"
                                >
                                    Agotado
                                </Chip>
                            )}

                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={`${product.title} image`}
                                    className="z-10 h-[240px] w-full object-contain"
                                    src={product.image}
                                />
                            </CardBody>
                            <CardFooter className="justify-between text-small">
                                <b>{product.title}</b>
                                <p className="text-default-500">
                                    {formatCurrency(product.price)}
                                </p>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}

import Link from 'next/link';

import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

import { subtitle, title } from '@/components/primitives';
import { getProducts } from '@/services/product';
import { formatCurrency } from '@/utils/format-currency';

export default async function Home() {
    const products = await getProducts();

    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg justify-center text-center">
                <h1 className={title()}>PC Gaming Colombia</h1>
                <h2 className={subtitle({ class: 'mt-4' })}>
                    Comprar hardware en Colombia nunca fue tan facíl
                </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Link key={product.id} href={`/product/${product.slug}`}>
                        <Card shadow="sm" isPressable>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={`${product.title} image`}
                                    className="h-[240px] w-full object-contain"
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

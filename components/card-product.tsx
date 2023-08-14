import Link from 'next/link';

import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';

import type { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format-currency';

type CardProductProps = {
    product: Product;
};

export const CardProduct = ({ product }: CardProductProps) => {
    return (
        <Link href={`/product/${product.slug}`}>
            <Card shadow="sm" className="relative w-full" isPressable>
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
                <CardFooter className="justify-between gap-3 text-small">
                    <b>{product.title}</b>
                    <p className="text-default-500">
                        {formatCurrency(product.price)}
                    </p>
                </CardFooter>
            </Card>
        </Link>
    );
};

import { Chip } from '@nextui-org/chip';
import { Image } from '@nextui-org/image';

import { CartButton } from '@/components/cart-button';
import { subtitle, title } from '@/components/primitives';
import { getProduct, getProducts } from '@/services/product';
import { formatCurrency } from '@/utils/format-currency';

export async function generateStaticParams() {
    const products = await getProducts();

    return products.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ProductSlugPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const product = await getProduct(slug);

    return (
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
                <Image
                    src={product.image}
                    alt={product.title}
                    width="100%"
                    height="100%"
                    className="object-contain"
                    isZoomed
                />
            </div>

            <div>
                <div className="mb-5 flex flex-row gap-3">
                    <Chip variant="bordered">{product.category.name}</Chip>
                    <Chip>{product.brand.name}</Chip>
                </div>
                <h1 className={title()}>{product.title}</h1>
                <p className="mt-4">{product.description}</p>
                <p
                    className={subtitle({
                        class: 'mt-4',
                    })}
                >
                    {formatCurrency(product.price)}
                </p>

                <div className="mt-10">
                    {product.availability ? (
                        <CartButton product={product} />
                    ) : (
                        <Chip color="danger">Agotado</Chip>
                    )}
                </div>
            </div>
        </section>
    );
}

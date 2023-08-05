import { Image } from '@nextui-org/image';

import { subtitle, title } from '@/components/primitives';
import { getProducts } from '@/services/product';

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
                    <div
                        key={product.id}
                        className="flex flex-col items-center justify-center gap-2 rounded-md bg-default-100 p-4"
                    >
                        <Image
                            width={300}
                            height={300}
                            isZoomed
                            alt={`Imagen de ${product.title}`}
                            src={product.image || ''}
                        />
                        <p className="text-center text-sm font-semibold">
                            {product.title}
                        </p>
                        <p className="text-center text-sm font-semibold">
                            {product.price}
                        </p>
                        <p>{product.brand.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

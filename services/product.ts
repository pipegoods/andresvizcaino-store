import { DataRepsonse, adapterProduct } from '@/adapters/product';
import type { Product } from '@/types/product';
import { fetchAPI } from '@/utils/fetch-api';

const PATH = '/products';

export async function getProducts(): Promise<Product[]> {
    const urlParamsObject = {
        populate: {
            image: {
                fields: ['url'],
            },
            brand: {
                fields: ['name', 'slug'],
            },
            category: {
                fields: ['name', 'slug'],
            },
        },
    };

    const products = await fetchAPI(PATH, urlParamsObject);
    const { data } = products as { data: DataRepsonse[] };

    // adapt response with Product type
    const adaptedProducts: Product[] = data.map(adapterProduct);

    return adaptedProducts;
}

export async function getProduct(slug: string): Promise<Product> {
    const urlParamsObject = {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            image: {
                fields: ['url'],
            },
            brand: {
                fields: ['name'],
            },
            category: {
                fields: ['name'],
            },
        },
    };

    const product = await fetchAPI(PATH, urlParamsObject);
    const { data } = product as { data: DataRepsonse[] };

    if (!data.length) throw new Error('Product not found');

    // adapt response with Product type
    const adaptedProduct: Product = adapterProduct(data[0]);

    return adaptedProduct;
}

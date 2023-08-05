import { DataRepsonse, adapterProduct } from '@/adapters/product';
import { Product } from '@/types/product';
import { fetchAPI } from '@/utils/fetch-api';

const PATH = '/products';

export async function getProducts(): Promise<Product[]> {
    const urlParamsObject = {
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

    const products = await fetchAPI(PATH, urlParamsObject);
    const { data } = products as { data: DataRepsonse[] };

    // adapt response with Product type
    const adaptedProducts: Product[] = data.map(adapterProduct);

    return adaptedProducts;
}

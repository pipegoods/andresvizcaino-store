import { adapterCategory } from '@/adapters/category';
import type { DataRepsonse } from '@/types';
import type { Category } from '@/types/category';
import { fetchAPI } from '@/utils/fetch-api';

const PATH = '/categories';

export async function getCategories(): Promise<Category[]> {
    const urlParamsObject = {
        populate: {
            products: {
                fields: ['id'],
            },
        },
    };

    const categories = await fetchAPI(PATH, urlParamsObject);
    const { data } = categories as { data: DataRepsonse<Category>[] };

    const adaptedCategories: Category[] = data.map(adapterCategory);

    return adaptedCategories;
}

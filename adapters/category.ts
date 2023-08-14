import type { DataRepsonse } from '@/types';
import { Category } from '@/types/category';

export function adapterCategory(response: DataRepsonse<Category>): Category {
    return {
        id: response.id,
        name: response.attributes.name,
        slug: response.attributes.slug,
    };
}

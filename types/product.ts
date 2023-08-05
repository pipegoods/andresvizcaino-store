import { Brand } from './brand';
import { Category } from './category';

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    availability: boolean;
    slug: string;
    image: string;
    brand: Brand;
    category: Category;
};

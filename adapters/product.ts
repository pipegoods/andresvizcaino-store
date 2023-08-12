import { Product } from '@/types/product';

export interface DataRepsonse {
    attributes: DatumAttributes;
    id: number;
}

export interface DatumAttributes {
    availability: boolean;
    brand: Brand;
    category: Brand;
    createdAt: Date;
    description: string;
    image: Image;
    price: number;
    publishedAt: Date;
    slug: string;
    title: string;
    updatedAt: Date;
}

export interface Brand {
    data: BrandData;
}

export interface BrandData {
    attributes: PurpleAttributes;
    id: number;
}

export interface PurpleAttributes {
    name: string;
    slug: string;
}

export interface Image {
    data: ImageData;
}

export interface ImageData {
    attributes: FluffyAttributes;
    id: number;
}

export interface FluffyAttributes {
    url: string;
}

export function adapterProduct(product: DataRepsonse): Product {
    return {
        id: product.id,
        title: product.attributes.title,
        description: product.attributes.description,
        price: product.attributes.price,
        availability: product.attributes.availability,
        slug: product.attributes.slug,
        image: product.attributes.image.data.attributes.url,
        brand: {
            id: product.attributes.brand.data.id,
            name: product.attributes.brand.data.attributes.name,
            slug: product.attributes.brand.data.attributes.slug,
        },
        category: {
            id: product.attributes.category.data.id,
            name: product.attributes.category.data.attributes.name,
            slug: product.attributes.category.data.attributes.slug,
        },
    };
}

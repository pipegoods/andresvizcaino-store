import { ImageResponse } from 'next/server';

import { siteConfig } from '@/config/site';
import { getProduct } from '@/services/product';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = siteConfig.name;
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    // Font

    const stylesChip = {
        background: '#ebeded',
        color: 'black',
        fontSize: 32,
        padding: '0.5rem',
        borderRadius: '0.5rem',
        margin: '0.5rem',
    };

    const poppinsSemiBold = fetch(
        new URL('../../Poppins-SemiBold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const { slug } = params;

    const product = await getProduct(slug);

    if (!product) {
        return new Response('Not found', { status: 404 });
    }

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'black',
                    color: '#ebeded',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <span style={stylesChip}>{product.category.name}</span>
                    <span style={stylesChip}>{product.brand.name}</span>
                </div>

                <p style={{ fontSize: 98 }}>{product.title}</p>

                <p
                    style={{
                        fontSize: 48,
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {product.availability ? 'Disponible' : 'Agotado'}
                </p>

                <span
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        fontSize: 32,
                        padding: '0.5rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: '#ebeded',
                    }}
                >
                    🖥️ {siteConfig.name}
                </span>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
            fonts: [
                {
                    name: 'Poppins',
                    data: await poppinsSemiBold,
                    style: 'normal',
                    weight: 400,
                },
            ],
        },
    );
}

import { ImageResponse } from 'next/server';

import { siteConfig } from '@/config/site';

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
export default async function Image() {
    // Font
    const poppinsSemiBold = fetch(
        new URL('./Poppins-SemiBold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'black',
                    color: '#ebeded',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
               🖥️ Andrés Vizcaíno Store
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

import { NEXT_PUBLIC_WHASTAPP_NUMBER } from './env';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: 'Andrés Vizcaíno Store',
    description:
        'Asesorias y venta de hardware para Gaming o entorno profesional.',
    navItems: [],
    navMenuItems: [],
    links: {
        whatsapp: `https://api.whatsapp.com/send?phone=${NEXT_PUBLIC_WHASTAPP_NUMBER}`,
        cart: '/cart',
    },
};

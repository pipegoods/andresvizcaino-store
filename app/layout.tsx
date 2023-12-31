import '@/styles/globals.css';

import { Metadata } from 'next';

import { Providers } from './providers';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <Providers
                    themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
                >
                    <div className="relative flex h-screen flex-col">
                        <Navbar />
                        <main className="container mx-auto max-w-7xl grow px-6 pt-16">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>

                <Analytics />
            </body>
        </html>
    );
}

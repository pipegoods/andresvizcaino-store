import NextLink from 'next/link';

import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import {
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar,
} from '@nextui-org/navbar';

import { CartIconWithBadge } from './cart-icon-with-badge';
import { SearchIcon, WhatsAppIcon } from '@/components/icons';
import { ThemeSwitch } from '@/components/theme-switch';
import { siteConfig } from '@/config/site';

export const Navbar = () => {
    const searchInput = (
        <form className="flex items-center gap-2" action="/search">
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: 'text-sm',
                }}
                name="q"
                labelPlacement="outside"
                placeholder="Buscar producto..."
                startContent={
                    <SearchIcon className="pointer-events-none shrink-0 text-base text-default-400" />
                }
                type="search"
            />
        </form>
    );

    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="max-w-fit gap-3">
                    <NextLink
                        className="flex items-center justify-start gap-1"
                        href="/"
                    >
                        <p className="font-bold text-inherit hover:underline">
                            Andrés Vizcaíno Store
                        </p>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden basis-1/5 sm:flex sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden gap-2 sm:flex">
                    <Link
                        isExternal
                        href={siteConfig.links.whatsapp}
                        aria-label="WhatsApp"
                    >
                        <WhatsAppIcon className="text-default-500" />
                    </Link>
                    <Link
                        href={siteConfig.links.cart}
                        aria-label="Carrito de compras"
                    >
                        <CartIconWithBadge />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    {searchInput}
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
                <Link href={siteConfig.links.cart} aria-label="cart">
                    <CartIconWithBadge />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>
        </NextUINavbar>
    );
};

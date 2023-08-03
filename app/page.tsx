import NextLink from 'next/link';

import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';

import { GithubIcon } from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
import { siteConfig } from '@/config/site';

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg justify-center text-center">
                <h1 className={title()}>PC Gaming Colombia</h1>
                <h2 className={subtitle({ class: 'mt-4' })}>
                    Comprar hardware en Colombia nunca fue tan facíl
                </h2>
            </div>

            <div className="flex gap-3">
                <Link
                    isExternal
                    as={NextLink}
                    className={buttonStyles({
                        variant: 'bordered',
                        radius: 'full',
                    })}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20} />
                    GitHub
                </Link>
            </div>
        </section>
    );
}

import { Link } from '@nextui-org/link';

export const Footer = () => {
    return (
        <footer className="flex w-full items-center justify-center py-3">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/pipegoods"
                title="Andrés Vizcaíno github"
            >
                <span className="text-default-600">Desarrollado por</span>
                <p className="text-primary">Andrés Vizcaíno</p>
            </Link>
        </footer>
    );
};

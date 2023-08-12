import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export type DataRepsonse<T = unknown> = {
    attributes: DatumAttributes<T>;
    id: number;
};

export type DatumAttributes<T = unknown> = {
    [key in keyof T]: T[key];
} & {
    createdAt: Date;
    updatedAt: Date;
};

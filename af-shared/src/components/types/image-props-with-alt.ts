import { ImageProps } from 'next/image';

export type ImagePropsWithAlt = ImageProps & {
	alt: string;
};

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { Card as CardMantine, DefaultProps, Selectors } from '@mantine/core';
import NoImage from '../no-image/no-image.component';
import { useStyles } from './card.styles';

type MyComponentStylesNames = Selectors<typeof useStyles>;

interface Props extends DefaultProps<MyComponentStylesNames> {
	children: React.ReactNode;
	id?: string;
	Header?: React.ComponentType;
	image?: ImageProps;
	variant: 'vertical' | 'horizontal';
}

const Card = React.forwardRef<HTMLDivElement, Props>(({ children, classNames, styles, unstyled, className, image, Header, variant, p, ...others }, ref) => {
	const { classes, cx } = useStyles({ variant }, { name: 'MyCard', classNames, unstyled });
	return (
		<CardMantine className={cx(classes.cardContainer, className)} ref={ref} {...others}>
			{Header && <Header />}
			<div className={cx({ [classes.orientation]: variant === 'horizontal' })}>
				<div className={classes.imageContainer}>
					{image ? (
						<Image layout="fixed" width={image.width} height={image.height} src={image.src} alt={image.alt} />
					) : (
						<div className={classes.imagePlaceholder}>
							<NoImage />
						</div>
					)}
				</div>
				<div className={classes.contentContainer}>{children}</div>
			</div>
		</CardMantine>
	);
});

export default Card;

import Image from 'next/image';
import { forwardRef } from 'react';
import { ImageProps } from 'next/image';
import { Card, createPolymorphicComponent, Flex, Text, Title } from '@mantine/core';

import { constructCDNAdImageUri } from 'af-shared/lib/components/utils/construct-CDN-uri';
import { AD_CARD } from 'af-shared/lib/components/constants/image';
import { Ad } from 'af-shared/lib/graphql';

import FavoriteAction from '../../favorite-action/favorite-action.component';
import PriceRating from '../../price-rating/price-rating.component';
import { KEY_AD_CARD_ATTRIBUTES } from 'src/components/constants/ad-card';
import AfValue from '../../af-value/af-value.component';
import { useStyles } from '../ad.styles';
import { CardWithoutChildren } from '../ad.types';
import NoImage from '../../no-image/no-image.component';
import { useRouter } from 'next/router';

interface AdVerticalProps extends CardWithoutChildren {
	ad: Ad;
}

const _AdVertical = forwardRef<HTMLDivElement, AdVerticalProps>(({ ad, className, ...other }, ref) => {
	const { locale } = useRouter();
	const { classes, cx, theme } = useStyles();
	let image:
		| (ImageProps & {
				alt: string;
		  })
		| null = null;

	if (ad.files && ad.files.length > 0) {
		image = {
			src: constructCDNAdImageUri(ad.files[0].path),
			alt: ad.files[0].filename,
			objectFit: 'contain',
			layout: 'fill',
			placeholder: 'blur',
			blurDataURL: '/images/blur-car-card-image.png',
		};
	}

	return (
		<Card withBorder {...other} className={cx(classes.adVertical, className)} ref={ref}>
			<Card.Section className={classes.imageContainer}>{image ? <Image {...image} alt={image.alt} /> : <NoImage className={classes.heightwidth100} />}</Card.Section>
			<Flex direction={'column'} justify={'space-evenly'} align={'stretch'} className={classes.contentContainer}>
				<Flex justify={'space-between'} className={classes.title}>
					<Title order={3}>{ad.title}</Title>
					<FavoriteAction ad_id={ad.ad_id} />
				</Flex>
				<div className={classes.grid3x2}>
					{KEY_AD_CARD_ATTRIBUTES.map((kF) => (
						<div className={classes.span1} key={kF}>
							<AfValue
								attribute={kF}
								ad={ad}
								style={{
									color: theme.black,
								}}
							/>
						</div>
					))}
					<Flex align={'center'}>
						<Title
							order={4}
							className={classes.span1}
							style={{
								color: theme.black,
								margin: 0,
							}}
						>
							{ad.price_eurocent?.toLocaleString(locale)}&nbsp;€
						</Title>
					</Flex>
					<div className={classes.span1}>
						<PriceRating priceRating={ad.price_rating} />
					</div>
				</div>
			</Flex>
		</Card>
	);
});

_AdVertical.displayName = 'AdVertical';

export const AdVertical = createPolymorphicComponent<'div', AdVerticalProps>(_AdVertical);

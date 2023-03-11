import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container, Flex, Text, Title } from '@mantine/core';

import { ImagePropsWithAlt } from 'af-shared/lib/components/types/image-props-with-alt';

import Section from 'src/components/common/section/section.component';
import { useStyles } from './price-estimate-section.styles';

const PRICE_ESTIMATE_IMAGE: ImagePropsWithAlt = {
	src: '/images/price-estimate.png',
	alt: 'Price estimate car',
	width: 591,
	height: 378,
	layout: 'intrinsic',
};

interface PriceEstimateSection {
	className?: string;
}

const PriceEstimateSection: React.FC<PriceEstimateSection> = ({ className }) => {
	const { classes } = useStyles();
	const { t } = useTranslation();
	return (
		<Section className={className}>
			<Flex align={'stretch'} justify={'flex-end'} gap={'12rem'} className={classes.priceEstimateContainer}>
				<div>
					<Flex direction={'column'} justify={'space-between'} className={classes.contentContainer}>
						<Title order={2}>{t<string>('home:price-estimate.title')}</Title>
						<Text className={classes.marginB1}>{t<string>('home:price-estimate.text')}</Text>
						<Link href="/price-estimate">
							<Button>{t<string>('home:price-estimate.button')}</Button>
						</Link>
					</Flex>
				</div>
				<Flex justify={'center'} className={classes.imagePlaceholder}>
					<Image {...PRICE_ESTIMATE_IMAGE} alt={PRICE_ESTIMATE_IMAGE.alt} />
				</Flex>
			</Flex>
		</Section>
	);
};
export default PriceEstimateSection;

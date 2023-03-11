import Image from 'next/image';
import { Rating, Title } from '@mantine/core';

import { NoImage } from 'af-shared/lib/components';
import { AD_IMAGE_CDN } from 'af-shared/lib/components/constants/image';
import { Ad } from 'af-shared/lib/graphql';

import AfValue from '../../../common/af-value/af-value.component';

import { useStyles } from '../compare.styles';
import RemovedAd from '../remove-ad/remove-ad.component';

const IMAGE = {
	WIDTH: '240px',
	HEIGHT: '180px',
};

interface Props {
	ad: Ad | null | undefined;
}

const CompareCard: React.FC<Props> = ({ ad }) => {
	const { classes, cx } = useStyles();
	const image = ad?.files?.[0];
	const adId = ad?.ad_id;
	return (
		<div className={cx(classes.flex, classes.flexColumn, classes.gap05)}>
			{adId && <RemovedAd adId={adId} />}
			{!image ? <NoImage /> : <Image src={`${AD_IMAGE_CDN}${image.path}`} alt={image.filename} width={IMAGE.WIDTH} height={IMAGE.HEIGHT} layout="fixed" priority />}
			<Title order={2} className={classes.margin0}>
				<AfValue attribute={'make_cid'} ad={ad} />
				&nbsp;
				<AfValue attribute={'model_cid'} ad={ad} />
			</Title>
			<div>
				<AfValue attribute={'price_eurocent'} ad={ad} format={(value) => value + '€'} />
				<Rating value={4} readOnly />
			</div>
		</div>
	);
};

export default CompareCard;

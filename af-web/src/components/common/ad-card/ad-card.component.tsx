import Link from 'next/link';

import { CardVariant } from 'af-shared/lib/components/types/card-variant';
import { Ad } from 'af-shared/lib/graphql';

import AdHorizontal from './ad-horizontal/ad-horizontal.component';
import { AdVertical } from './ad-vertical/ad-vertical.component';
import { useStyles } from './ad.styles';
import { CardWithoutChildren } from './ad.types';

interface AdCardProps extends CardWithoutChildren {
	variant?: CardVariant;
	ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad, variant = 'vertical' }) => {
	const { classes, cx } = useStyles();
	let _AdCard: React.FunctionComponentElement<AdCardProps>;
	const _classes = cx(classes.cursorPointer);
	if (variant === 'horizontal') _AdCard = <AdHorizontal ad={ad} />;
	_AdCard = <AdVertical<'a'> ad={ad} component="a" className={_classes} />;

	return (
		<Link
			href={{
				pathname: `/listings/${ad.ad_id}`,
			}}
		>
			{_AdCard}
		</Link>
	);
};

export default AdCard;

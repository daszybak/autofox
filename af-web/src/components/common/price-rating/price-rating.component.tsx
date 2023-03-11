import { Flex, Text } from '@mantine/core';

import { RatingIcons } from 'src/components/constants/rating-icons';
import IconWrapper from '../icon-wrapper/icon-wrapper.component';
import useStyles from './price-rating.styles';
interface PriceRatingProps {
	priceRating: number | null;
	iconSize?: number;
}

const PriceRating: React.FC<PriceRatingProps> = ({ priceRating, iconSize = 32 }) => {
	const { classes } = useStyles();
	const rating = RatingIcons.filter((rating) => rating.rating === Math.ceil(priceRating || 0))[0];

	return (
		<Flex wrap={'nowrap'} justify={'space-between'} align={'center'}>
			<Text className={classes.priceRating}>{rating.label}</Text>
			<IconWrapper Icon={<rating.icon width={iconSize} height={iconSize} />} />
		</Flex>
	);
};
export default PriceRating;

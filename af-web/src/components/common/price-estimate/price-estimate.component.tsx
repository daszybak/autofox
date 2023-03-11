import { Badge, Flex, Text } from '@mantine/core';
import { useEstimateAdPriceQuery } from 'af-shared/lib/graphql';

interface PriceEstimateProps {}

const PriceEstimate: React.FC<PriceEstimateProps> = ({}) => {
	const { data: estimateAdPriceData } = useEstimateAdPriceQuery();

	return (
		<Flex gap={'2rem'}>
			<Text>Price estimate</Text>
			<Badge color={'orange'}>{estimateAdPriceData?.estimateAdPrice.price_eurocent}&nbsp;€</Badge>
		</Flex>
	);
};

export default PriceEstimate;

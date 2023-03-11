import { Card } from '@mantine/core';
import { Ad } from 'af-shared/lib/graphql';

interface AdHorizontalProps {
	ad: Ad;
}

const AdHorizontal: React.FC<AdHorizontalProps> = ({ ad }) => {
	return (
		<Card>
			<Card.Section></Card.Section>
		</Card>
	);
};

export default AdHorizontal;

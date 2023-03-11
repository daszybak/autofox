import { showNotification } from '@mantine/notifications';
import { useContext } from 'react';
import { CompareDataCtx } from '../../../context/compareCtx.component';
import Link from '../link/link.component';

const CompareLink = () => {
	const { compareAdIds } = useContext(CompareDataCtx);
	const compareCount = compareAdIds.length;

	if (compareCount === 0) {
		return (
			<Link
				navName="compare"
				href={'/listings/search'}
				onClick={() => {
					showNotification({
						title: 'Rerouting to search page',
						message: 'Please add some products to compare',
					});
				}}
			/>
		);
	}

	return (
		<Link
			navName="compare"
			href={{
				pathname: '/compare',
				query: { ad: compareAdIds },
			}}
			format={(value) => `${value}${compareCount ? `(${compareCount})` : ''}`}
		/>
	);
};
export default CompareLink;

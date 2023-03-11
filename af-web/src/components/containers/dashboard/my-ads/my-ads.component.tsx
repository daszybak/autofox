import { useMemo } from 'react';
import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useAuth } from 'react-oidc-context';
import { AdWhereInput, InputMaybe } from 'af-shared/lib/graphql';
import { useStyles } from './my-ads.styles';

import { GrMultiple } from 'react-icons/gr';
import AdsPagination from '../ads-pagination/ads-pagination.component';

const Filters = () => {
	const { classes } = useStyles();

	const renderedFilters = ['ACTIVE', 'SOLD', 'EXPIRED'].map((value) => {
		return (
			<Button
				variant={'white'}
				key={value}
				onClick={() => {
					showNotification({
						title: 'Filter',
						message: 'Functionality not implemented',
					});
				}}
			>
				<div className={classes.action}>
					<GrMultiple />
					{value}
				</div>
			</Button>
		);
	});

	return <div className={classes.filterContainer}>{renderedFilters}</div>;
};

const MyAds = () => {
	const { classes } = useStyles();
	const auth = useAuth();

	const where: InputMaybe<AdWhereInput> = useMemo(
		() => ({
			user_sub: {
				equals: auth.user?.profile.sub,
			},
		}),
		[auth.user?.profile.sub],
	);

	return (
		<div className={classes.relative}>
			<Filters />
			<AdsPagination where={where} path={'/account/my-ads'} />
		</div>
	);
};
export default MyAds;

import { useContext } from 'react';
import { LoadingOverlay, Text } from '@mantine/core';
import { AdWhereInput } from 'af-shared/lib/graphql';
import AdsPagination from '../ads-pagination/ads-pagination.component';
import { UserFavoritesCtx } from '../../../context/userFavoritesCtx.component';

const Favorites = () => {
	const { favoriteAdIds, favoritesLoading } = useContext(UserFavoritesCtx);
	console.log(favoriteAdIds, 'favoriteAdIds');

	const where: AdWhereInput = {
		OR: favoriteAdIds.map((adId) => ({
			ad_id: {
				equals: adId,
			},
		})),
	};

	if (!favoritesLoading && (!favoriteAdIds || favoriteAdIds.length === 0)) return <Text>You have not added any ads to favorites</Text>;

	return (
		<>
			<LoadingOverlay visible={favoritesLoading} />
			<AdsPagination where={where} path={'/account/favorites'} />
		</>
	);
};
export default Favorites;

import { createContext, useCallback, useMemo, useState } from 'react';
import { useIsomorphicEffect, useWindowEvent } from '@mantine/hooks';
import { FindFavoritesDocument, List, useAddToFavoritesMutation, useFindFavoritesQuery, useRemoveListAdMutation } from 'af-shared/lib/graphql';
import { showNotification } from '@mantine/notifications';
import { useAuthHelpers } from '../hooks/use-auth-helpers';
import _ from 'lodash';

const eventName = 'localStorage';

interface UserFavorites {
	favoriteListId: number | null;
	favoriteAdIds: number[];
}

const defaultUserFavorites: UserFavorites = {
	favoriteAdIds: [],
	favoriteListId: null,
};

type UserFavoritesContext = UserFavorites & {
	addToFavorites: (adId: string) => void;
	removeFromFavorites: (adId: string) => void;
	favoritesLoading: boolean;
};

export const UserFavoritesCtx = createContext<UserFavoritesContext>({
	addToFavorites: () => {},
	...defaultUserFavorites,
	removeFromFavorites: () => {},
	favoritesLoading: false,
});

interface UserFavoritesCtxProviderProps {
	children: React.ReactNode;
}

const UserFavoritesCtxProvider: React.FC<UserFavoritesCtxProviderProps> = ({ children }) => {
	const { handleSignIn, user, isAuthenticated, isLoading } = useAuthHelpers();
	const {
		data: findFavoritesData,
		// refetch,
		loading,
	} = useFindFavoritesQuery({
		fetchPolicy: 'network-only',
		skip: !isAuthenticated,
	});
	const favorites = findFavoritesData?.findOneList as List | null | undefined;
	const userFavoritesQueriedData = useMemo(
		() => ({
			favoriteAdIds: favorites?.ListAd?.map((listAd) => listAd.ad_id) ?? [],
			favoriteListId: favorites?.list_id ? _.toNumber(findFavoritesData?.findOneList?.list_id) : null,
		}),
		[favorites?.ListAd, favorites?.list_id, findFavoritesData?.findOneList],
	);

	const key = user?.profile.sub;
	const readStorageValue = useCallback((): UserFavorites | null => {
		if (typeof window === 'undefined' || !('localStorage' in window) || !key || localStorage.getItem(key) === null) return null;
		if (localStorage.getItem(key) === null) return null;
		const storageValue = JSON.parse(localStorage.getItem(key)!);

		return storageValue;
	}, [key]);

	const removeStorageValue = useCallback(() => {
		if (!key) return;
		localStorage.removeItem(key);
	}, [key]);

	const [userFavorites, setUserFavorites] = useState<UserFavorites>(findFavoritesData ? userFavoritesQueriedData : readStorageValue() ?? defaultUserFavorites);
	const setStorageValue = useCallback(
		(val: UserFavorites | ((prevState: UserFavorites) => UserFavorites)) => {
			if (!key) return;
			if (val instanceof Function) {
				setUserFavorites((current) => {
					const result = val(current);
					localStorage.setItem(key, JSON.stringify(result));
					dispatchEvent(new CustomEvent(eventName, { detail: { key, value: val(current) } }));
					return result;
				});
			} else {
				localStorage.setItem(key, JSON.stringify(val));
				dispatchEvent(new CustomEvent(eventName, { detail: { key, value: val } }));
				setUserFavorites(val);
			}
		},
		[key],
	);

	useWindowEvent('storage', (event) => {
		if (event.storageArea === localStorage && event.key === key) {
			if (!event.newValue) return;
			setUserFavorites(JSON.parse(event.newValue));
		}
	});

	useWindowEvent(eventName, (event) => {
		if (event.detail.key === key) {
			setUserFavorites(event.detail.value);
		}
	});

	useIsomorphicEffect(() => {
		setUserFavorites(userFavoritesQueriedData);
		setStorageValue(userFavoritesQueriedData);
	}, [userFavoritesQueriedData.favoriteAdIds.length, userFavoritesQueriedData, userFavoritesQueriedData.favoriteListId, setStorageValue]);

	const refetchQueries = () => [
		{
			query: FindFavoritesDocument,
		},
	];

	const [addToFavoritesFn] = useAddToFavoritesMutation({
		refetchQueries: [
			{
				query: FindFavoritesDocument,
				fetchPolicy: 'network-only',
			},
		],
	});

	const [removeFromFavoritesFn] = useRemoveListAdMutation({
		refetchQueries: [
			{
				query: FindFavoritesDocument,
				fetchPolicy: 'network-only',
			},
		],
	});

	const addToFavorites = (ad_id: string) => {
		if (!isAuthenticated) {
			return handleSignIn();
		}
		addToFavoritesFn({
			variables: {
				where: {
					ad_id: _.toNumber(ad_id),
				},
			},
			refetchQueries,
		});
		// refetch();
		showNotification({
			title: 'Added to favorites',
			message: 'You add has been successfully been added to favorites',
		});
	};

	const removeFromFavorites = (ad_id: string) => {
		if (!isAuthenticated) {
			return handleSignIn();
		}
		if (!userFavorites.favoriteListId)
			return showNotification({
				title: 'Failed to remove from favorites',
				message: 'Favorite list id missing',
			});
		removeFromFavoritesFn({
			variables: {
				ad_id: _.toNumber(ad_id),
				list_id: userFavorites.favoriteListId,
			},
			refetchQueries,
		});
		// refetch();
		showNotification({
			title: 'Removed from favorites',
			message: 'You add has been successfully been removed from favorites',
		});
	};

	const value: UserFavoritesContext = {
		favoriteAdIds: userFavorites.favoriteAdIds,
		favoriteListId: userFavorites.favoriteListId,
		addToFavorites,
		removeFromFavorites,
		favoritesLoading: loading,
	};

	return <UserFavoritesCtx.Provider value={value}>{children}</UserFavoritesCtx.Provider>;
};

export default UserFavoritesCtxProvider;

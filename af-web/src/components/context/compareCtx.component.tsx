import { useIsomorphicEffect } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import Router from 'next/router';
import { createContext, useEffect, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
import { MAX_COMPARE_ADS } from '../constants/compare-page';

interface CompareDataCtx {
	compareAdIds: string[];
	status: 'visited' | 'notVisited';
}

export const CompareDataCtx = createContext<CompareDataCtx>({ compareAdIds: [], status: 'notVisited' });

interface CompareApiCtx {
	addCompareAd: (adId: string) => void;
	removeCompareAd: (adId: string) => void;
	setCompareAds: (adIds: string[]) => void;
	setStatus: (status: 'visited' | 'notVisited') => void;
}

export const CompareApiCtx = createContext<CompareApiCtx>({
	addCompareAd: () => {},
	removeCompareAd: () => {},
	setCompareAds: () => {},
	setStatus: () => {},
});

type Actions =
	| { type: 'addCompareAd'; payload: string }
	| { type: 'removeCompareAd'; payload: string }
	| { type: 'setCompareAds'; payload: string[] }
	| { type: 'setStatus'; payload: 'visited' | 'notVisited' };

const reducer = (state: CompareDataCtx, action: Actions) => {
	switch (action.type) {
		case 'addCompareAd':
			state.compareAdIds.push(action.payload);
			break;
		case 'removeCompareAd':
			state.compareAdIds = state.compareAdIds.filter((adId) => adId !== action.payload);
			break;
		case 'setCompareAds':
			state.compareAdIds = action.payload;
			break;
		case 'setStatus':
			state.status = action.payload;
			break;
	}
};

interface CompareCtxProvider {
	children: React.ReactNode;
}

export const CompareCtxProvider: React.FC<CompareCtxProvider> = ({ children }) => {
	const [compareData, dispatch] = useImmerReducer(reducer, { compareAdIds: [], status: 'notVisited' as CompareDataCtx['status'] });

	const api = useMemo(() => {
		return {
			addCompareAd: (adId: string) => {
				if (compareData.compareAdIds.length === MAX_COMPARE_ADS)
					return showNotification({ title: 'You can only compare 3 ads at a time', message: 'Please remove an ad before adding another one' });
				showNotification({
					title: 'Added to compare',
					message: 'You can compare up to 3 ads',
				});
				dispatch({ type: 'addCompareAd', payload: adId });
			},
			removeCompareAd: (adId: string) => {
				showNotification({
					title: 'Removed from compare',
					message: 'Add removed from compare list',
				});
				dispatch({ type: 'removeCompareAd', payload: adId });
			},
			setCompareAds: (adIds: string[]) => {
				dispatch({ type: 'setCompareAds', payload: adIds });
			},
			setStatus: (status: 'visited' | 'notVisited') => {
				dispatch({ type: 'setStatus', payload: status });
			},
		};
	}, [dispatch, compareData.compareAdIds.length]);

	useIsomorphicEffect(() => {
		if (Router.pathname === '/compare') {
			const queryAdIds = Router.query.ad;
			const adIds = queryAdIds ? (Array.isArray(queryAdIds) ? queryAdIds : [queryAdIds]) : [];
			compareData.status === 'notVisited'
				? api.setCompareAds(adIds)
				: Router.push(
						{
							pathname: '/compare',
							query: { ad: compareData.compareAdIds },
						},
						undefined,
						{ shallow: true, scroll: false },
				  );
		}
	}, [compareData.compareAdIds.length]);

	return (
		<CompareDataCtx.Provider value={compareData}>
			<CompareApiCtx.Provider value={api}>{children}</CompareApiCtx.Provider>
		</CompareDataCtx.Provider>
	);
};

export default CompareCtxProvider;

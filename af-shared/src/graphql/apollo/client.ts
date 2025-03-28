//https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
import { ApolloClient, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { AppProps } from 'next/app';
import { useMemo } from 'react';
import { cacheConfig } from './cache';

import { errorLink, httpLink } from './links';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const isBrowser = typeof window !== 'undefined';

function createApolloClient() {
	return new ApolloClient({
		ssrMode: !isBrowser,
		cache: new InMemoryCache(cacheConfig),
		connectToDevTools: true,
	});
}

export function initializeApollo(initialState: any | null = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Merge the existing cache into data passed from getStaticProps/getServerSideProps
		const data = merge(initialState, existingCache, {
			// combine arrays using object equality (like in sets)
			arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s)))],
		});

		// Restore the cache with the merged data
		_apolloClient.cache.restore(data);
	}

	// 	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') {
		_apolloClient.setLink(from([errorLink, httpLink]));
		return _apolloClient;
	}

	// 	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: AppProps['pageProps']) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
	}

	return pageProps;
}

export function useApollo(pageProps: AppProps['pageProps']) {
	const state = pageProps[APOLLO_STATE_PROP_NAME];
	const store = useMemo(() => initializeApollo(state), [state]);
	return store;
}

// Examples
// https://github.com/vercel/next.js/tree/canary/examples/with-apollo

// SSR example:
// export async function getServerSideProps() {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: ALL_POSTS_QUERY,
//     variables: allPostsQueryVars,
//   })

//   return addApolloState(apolloClient, {
//     props: {},
//   })
// }

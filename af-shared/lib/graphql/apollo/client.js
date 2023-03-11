var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';
import { cacheConfig } from './cache';
import { errorLink, httpLink } from './links';
export var APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
var apolloClient;
var isBrowser = typeof window !== 'undefined';
function createApolloClient() {
    return new ApolloClient({
        ssrMode: !isBrowser,
        cache: new InMemoryCache(cacheConfig),
        connectToDevTools: true,
    });
}
export function initializeApollo(initialState) {
    if (initialState === void 0) { initialState = null; }
    var _apolloClient = apolloClient !== null && apolloClient !== void 0 ? apolloClient : createApolloClient();
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        var existingCache = _apolloClient.extract();
        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        var data = merge(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: function (destinationArray, sourceArray) { return __spreadArray(__spreadArray([], sourceArray, true), destinationArray.filter(function (d) { return sourceArray.every(function (s) { return !isEqual(d, s); }); }), true); },
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
    if (!apolloClient)
        apolloClient = _apolloClient;
    return _apolloClient;
}
export function addApolloState(client, pageProps) {
    if (pageProps === null || pageProps === void 0 ? void 0 : pageProps.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }
    return pageProps;
}
export function useApollo(pageProps) {
    var state = pageProps[APOLLO_STATE_PROP_NAME];
    var store = useMemo(function () { return initializeApollo(state); }, [state]);
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
//# sourceMappingURL=client.js.map
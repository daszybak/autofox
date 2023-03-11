import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { AppProps } from 'next/app';
export declare const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
export declare function initializeApollo(initialState?: any | null): ApolloClient<NormalizedCacheObject>;
export declare function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: AppProps['pageProps']): any;
export declare function useApollo(pageProps: AppProps['pageProps']): ApolloClient<NormalizedCacheObject>;

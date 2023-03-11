import React, { useCallback, useMemo } from 'react';
import { useAuth, AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { ApolloProvider, useApolloClient, from } from '@apollo/client';
import { useApollo } from '../../../graphql';

import { createAuthLink, errorLink, httpLink } from '../../../graphql/apollo/links';
import { isBrowser } from '../../utils/is-browser';

interface ApolloSetClientLinksProps {
	children: React.ReactNode;
}

const ApolloSetClientLinks: React.FC<ApolloSetClientLinksProps> = ({ children }) => {
	const auth = useAuth();
	const client = useApolloClient();

	const authLink = useMemo(() => createAuthLink(auth?.user?.access_token), [auth]);

	const setClientLinks = useCallback(() => {
		client.setLink(from([errorLink, authLink, httpLink]));
	}, [authLink, client, errorLink, httpLink]);

	if (isBrowser) {
		setClientLinks();
	}

	return <>{children}</>;
};

interface ApolloAuthProviderProps {
	pageProps: any;
	oidcConfig: AuthProviderProps;
	children: React.ReactNode;
}

const ApolloAuthProviderProvider: React.FC<ApolloAuthProviderProps> = ({ children, pageProps, oidcConfig }) => {
	const apolloClient = useApollo(pageProps);

	return (
		<AuthProvider {...oidcConfig}>
			<ApolloProvider client={apolloClient}>
				<ApolloSetClientLinks>{children}</ApolloSetClientLinks>
			</ApolloProvider>
		</AuthProvider>
	);
};

export default ApolloAuthProviderProvider;

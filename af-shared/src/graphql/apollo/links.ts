import { ApolloLink, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const createAuthLink = (access_token: string | undefined): ApolloLink => {
	return new ApolloLink((operation, forward) => {
		operation.setContext(({ headers }: Record<string, any>) => ({
			headers: {
				Authorization: `Bearer ${access_token}`,
				...headers,
			},
		}));
		return forward(operation);
	});
};

export const httpLink = createHttpLink({
	uri: 'https://api.autofox.iddqd.hr/graphql',
	// Server URL (must be absolute)
	// 			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

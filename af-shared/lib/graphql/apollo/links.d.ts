import { ApolloLink } from '@apollo/client';
export declare const errorLink: ApolloLink;
export declare const createAuthLink: (access_token: string | undefined) => ApolloLink;
export declare const httpLink: ApolloLink;

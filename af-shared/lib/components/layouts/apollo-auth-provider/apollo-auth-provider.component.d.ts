import React from 'react';
import { AuthProviderProps } from 'react-oidc-context';
interface ApolloAuthProviderProps {
    pageProps: any;
    oidcConfig: AuthProviderProps;
    children: React.ReactNode;
}
declare const ApolloAuthProviderProvider: React.FC<ApolloAuthProviderProps>;
export default ApolloAuthProviderProvider;

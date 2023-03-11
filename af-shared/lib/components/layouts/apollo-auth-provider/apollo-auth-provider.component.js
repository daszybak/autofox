var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useCallback, useMemo } from 'react';
import { useAuth, AuthProvider } from 'react-oidc-context';
import { ApolloProvider, useApolloClient, from } from '@apollo/client';
import { useApollo } from '../../../graphql';
import { createAuthLink, errorLink, httpLink } from '../../../graphql/apollo/links';
import { isBrowser } from '../../utils/is-browser';
var ApolloSetClientLinks = function (_a) {
    var children = _a.children;
    var auth = useAuth();
    var client = useApolloClient();
    var authLink = useMemo(function () { var _a; return createAuthLink((_a = auth === null || auth === void 0 ? void 0 : auth.user) === null || _a === void 0 ? void 0 : _a.access_token); }, [auth]);
    var setClientLinks = useCallback(function () {
        client.setLink(from([errorLink, authLink, httpLink]));
    }, [authLink, client, errorLink, httpLink]);
    if (isBrowser) {
        setClientLinks();
    }
    return React.createElement(React.Fragment, null, children);
};
var ApolloAuthProviderProvider = function (_a) {
    var children = _a.children, pageProps = _a.pageProps, oidcConfig = _a.oidcConfig;
    var apolloClient = useApollo(pageProps);
    return (React.createElement(AuthProvider, __assign({}, oidcConfig),
        React.createElement(ApolloProvider, { client: apolloClient },
            React.createElement(ApolloSetClientLinks, null, children))));
};
export default ApolloAuthProviderProvider;
//# sourceMappingURL=apollo-auth-provider.component.js.map
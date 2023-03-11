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
import { ApolloLink, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
export var errorLink = onError(function (_a) {
    var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
    if (graphQLErrors)
        graphQLErrors.forEach(function (_a) {
            var message = _a.message, locations = _a.locations, path = _a.path;
            return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
        });
    if (networkError)
        console.log("[Network error]: ".concat(networkError));
});
export var createAuthLink = function (access_token) {
    return new ApolloLink(function (operation, forward) {
        operation.setContext(function (_a) {
            var headers = _a.headers;
            return ({
                headers: __assign({ Authorization: "Bearer ".concat(access_token) }, headers),
            });
        });
        return forward(operation);
    });
};
export var httpLink = createHttpLink({
    uri: 'https://api.autofox.iddqd.hr/graphql',
    // Server URL (must be absolute)
    // 			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});
//# sourceMappingURL=links.js.map
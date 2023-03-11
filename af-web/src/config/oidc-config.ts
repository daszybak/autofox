import { AuthProviderProps } from 'react-oidc-context';
import { User } from 'oidc-client-ts';

const isBrowser = typeof window !== 'undefined';

export const oidcConfig: AuthProviderProps = {
	authority: 'https://auth.autofox.iddqd.hr/realms/autofox',
	client_id: 'af-web',
	redirect_uri: isBrowser ? `${location.origin}` : '',
	response_type: 'code',
	post_logout_redirect_uri: isBrowser ? `${location.origin}` : '',
	redirectMethod: 'replace',
	onSigninCallback: (_user: User | void) => {
		const path = location.pathname + location.search.split(/&state=|\?state=/g)[0];
		window.history.replaceState({}, document.title, path);
	},
};

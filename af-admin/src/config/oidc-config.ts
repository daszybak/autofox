import { AuthProviderProps } from 'react-oidc-context';

const isBrowser = typeof window !== 'undefined';

export const oidcConfig: AuthProviderProps = {
	authority: 'https://auth.autofox.iddqd.hr/realms/autofox',
	client_id: 'af-admin',
	redirect_uri: isBrowser ? `${window.location.protocol}//${window.location.host}` : '',
	response_type: 'code',
	post_logout_redirect_uri: isBrowser ? `${window.location.protocol}//${window.location.host}` : '',
};

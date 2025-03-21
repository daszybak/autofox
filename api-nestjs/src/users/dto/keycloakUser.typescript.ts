export type KeyloakUser = {
	exp: number;
	iat: number;
	auth_time: number;
	jti: string;
	iss: string;
	aud: ['realm-management', 'account'];

	/**
	 * User id
	 */
	sub: string;
	typ: 'Bearer';
	azp: 'af-web' | 'af-admin';
	session_state: string;
	acr: string;
	'allowed-origins': [string];
	realm_access: {
		roles: [string];
	};
	resource_access: {
		'realm-management': { roles: [string] };
		account: { roles: [string] };
	};
	scope: string;
	sid: string;
	email_verified: boolean;
	name: string;
	preferred_username: string;
	given_name: string;
	family_name: string;
	email: string;
};

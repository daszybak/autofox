import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
	createKeycloakConnectOptions(): KeycloakConnectOptions {
		return {
			authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
			realm: process.env.KEYCLOAK_REALM,
			clientId: process.env.KEYCLOAK_CLIENT_ID,
			secret: process.env.KEYCLOAK_SECRET,
			cookieKey: process.env.KEYCLOAK_COOKIE_KEY,
			logLevels: ['verbose'],
			useNestLogger: true,
			policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
			tokenValidation: TokenValidation.ONLINE,
		};
	}
}

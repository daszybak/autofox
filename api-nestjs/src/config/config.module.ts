import { Module } from '@nestjs/common';
import { AzureBlobConfigService } from './azure-blob-config';
import { KeycloakConfigService } from './keycloak-config.service';

@Module({
	providers: [KeycloakConfigService, AzureBlobConfigService],
	exports: [KeycloakConfigService, AzureBlobConfigService],
})
export class ConfigModule {}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AzureBlobConfigService {
	createOptions() {
		return {
			accountName: process.env.AZURE_BLOB_ACCOUNT_NAME,
			key: process.env.AZURE_BLOB_KEY,
			containerName: process.env.AZURE_BLOB_CONTAINER_NAME,
			expiration: process.env.AZURE_BLOB_SIGNATURE_EXPIRATION,
		};
	}
}

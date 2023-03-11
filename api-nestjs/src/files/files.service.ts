import { Injectable, Logger } from '@nestjs/common';
import {
	File,
	DeleteOneFileArgs,
	FindFirstFileArgs,
	FindManyFileArgs,
	FindUniqueFileArgs,
	UpdateOneFileArgs,
	FileCreateWithoutAdInput,
	FileUncheckedCreateInput,
} from '../@generated/file';
import { PrismaService } from '../prisma.service';

import * as storage from '@azure/storage-blob';
import { AzureBlobConfigService } from '../config/azure-blob-config';
import e from 'express';

@Injectable()
export class FilesService {
	private readonly logger = new Logger(FilesService.name);

	constructor(private prisma: PrismaService, private configService: AzureBlobConfigService) {}

	async getSASToken(user_uuid: string, filename: string) {
		const { accountName, key, containerName, expiration } = this.configService.createOptions();
		const creds = new storage.StorageSharedKeyCredential(accountName, key);
		const blobServiceClient = new storage.BlobServiceClient(`https://${accountName}.blob.core.windows.net`, creds);
		const client = blobServiceClient.getContainerClient(containerName);
		const blobName = `${user_uuid}/${filename}`;
		const blobClient = client.getBlobClient(blobName);

		const startsOn = new Date();
		const expiresOn = new Date(new Date().valueOf() + Number(expiration));
		const blobSAS = storage
			.generateBlobSASQueryParameters(
				{
					containerName,
					blobName,
					permissions: storage.BlobSASPermissions.parse('rw'),
					startsOn,
					expiresOn,
				},
				creds,
			)
			.toString();

		const url = blobClient.url + '?' + blobSAS;
		return {
			url,
			blobName,
			startsOn,
			expiresOn,
		};
	}

	processFileInput(input: FileCreateWithoutAdInput[], user_sub: string): FileUncheckedCreateInput[] {
		return (input.filter((e) => e.path.startsWith(user_sub)) as FileUncheckedCreateInput[]).map((e) => ({ ...e, user_sub: user_sub }));
	}

	async findAll(args: FindManyFileArgs): Promise<File[]> {
		return this.prisma.file.findMany({
			...args,
		});
	}

	async findUnique(args: FindUniqueFileArgs): Promise<File | null> {
		return this.prisma.file.findUnique(args);
	}

	async findOne(args: FindFirstFileArgs): Promise<File> {
		return this.prisma.file.findFirst(args);
	}

	async update(args: UpdateOneFileArgs): Promise<File> {
		return this.prisma.file.update(args);
	}

	async remove(args: DeleteOneFileArgs): Promise<File> {
		return this.prisma.file.delete(args);
	}
}

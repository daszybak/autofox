import { Injectable, Logger } from '@nestjs/common';
import {
	MessagingChannelCreateWithoutUserInput,
	MessagingChannel,
	FindManyMessagingChannelArgs,
	FindFirstMessagingChannelArgs,
	FindUniqueMessagingChannelArgs,
	UpdateOneMessagingChannelArgs,
	DeleteOneMessagingChannelArgs,
} from 'src/@generated/messaging-channel';
import { PrismaService } from 'src/prisma.service';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';

@Injectable()
export class MessagingChannelService {
	private readonly logger = new Logger(MessagingChannelService.name);

	constructor(private prisma: PrismaService) {}

	async create(args: MessagingChannelCreateWithoutUserInput, user: KeyloakUser): Promise<MessagingChannel> {
		return this.prisma.messagingChannel.create({
			data: {
				...args,
				user: {
					connectOrCreate: {
						where: { user_sub: user.sub },
						create: { user_sub: user.sub, name: user.name },
					},
				},
			},
		});
	}

	async findAll(args: FindManyMessagingChannelArgs): Promise<MessagingChannel[]> {
		return this.prisma.messagingChannel.findMany(args);
	}

	async findFirst(args: FindFirstMessagingChannelArgs): Promise<MessagingChannel | null> {
		return this.prisma.messagingChannel.findFirst(args);
	}

	async findUnique(args: FindUniqueMessagingChannelArgs): Promise<MessagingChannel | null> {
		return this.prisma.messagingChannel.findUnique(args);
	}

	async update(args: UpdateOneMessagingChannelArgs): Promise<MessagingChannel> {
		return this.prisma.messagingChannel.update(args);
	}

	async remove(args: DeleteOneMessagingChannelArgs): Promise<MessagingChannel> {
		return this.prisma.messagingChannel.update({
			...args,
			data: {
				deleted_at: new Date(),
			},
		});
	}
}

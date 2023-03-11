import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MessagingChannelResolver } from './messaging-channel.resolver';
import { MessagingChannelService } from './messaging-channel.service';

@Module({
	providers: [MessagingChannelResolver, MessagingChannelService, PrismaService],
})
export class MessagingChannelModule {}

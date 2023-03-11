import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticatedUser, Resource, Scopes } from 'nest-keycloak-connect';
import {
	DeleteOneMessagingChannelArgs,
	FindFirstMessagingChannelArgs,
	FindManyMessagingChannelArgs,
	FindUniqueMessagingChannelArgs,
	MessagingChannel,
	MessagingChannelCreateWithoutUserInput,
	UpdateOneMessagingChannelArgs,
} from 'src/@generated/messaging-channel';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';
import { MessagingChannelService } from './messaging-channel.service';

@Resolver(() => MessagingChannel)
@Resource(MessagingChannel.name)
export class MessagingChannelResolver {
	constructor(private readonly messagingChannelService: MessagingChannelService) {}

	@Mutation(() => MessagingChannel)
	@Scopes('create')
	createMessagingChannel(@Args('data') args: MessagingChannelCreateWithoutUserInput, @AuthenticatedUser() user: KeyloakUser) {
		return this.messagingChannelService.create(args, user);
	}

	@Query(() => [MessagingChannel])
	@Scopes('find')
	findAllMessagingChannels(@Args() args: FindManyMessagingChannelArgs) {
		return this.messagingChannelService.findAll(args);
	}

	@Query(() => MessagingChannel, { nullable: true })
	@Scopes('find')
	findUniqueMessagingChannel(@Args() args: FindUniqueMessagingChannelArgs) {
		return this.messagingChannelService.findUnique(args);
	}

	@Query(() => MessagingChannel, { nullable: true })
	@Scopes('find')
	findFirstMessagingChannel(@Args() args: FindFirstMessagingChannelArgs) {
		return this.messagingChannelService.findFirst(args);
	}

	@Mutation(() => MessagingChannel, { nullable: true })
	@Scopes('update')
	updateMessagingChannel(@Args() args: UpdateOneMessagingChannelArgs) {
		return this.messagingChannelService.update(args);
	}

	@Mutation(() => MessagingChannel, { nullable: true })
	@Scopes('remove')
	removeMessagingChannel(@Args() args: DeleteOneMessagingChannelArgs) {
		return this.messagingChannelService.remove(args);
	}
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelWhereUniqueInput } from '../inputs/messaging-channel-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingChannelCreateInput } from '../inputs/messaging-channel-create.input';
import { MessagingChannelUpdateInput } from '../inputs/messaging-channel-update.input';

@ArgsType()
export class UpsertOneMessagingChannelArgs {

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:false})
    @Type(() => MessagingChannelWhereUniqueInput)
    where!: MessagingChannelWhereUniqueInput;

    @Field(() => MessagingChannelCreateInput, {nullable:false})
    @Type(() => MessagingChannelCreateInput)
    create!: MessagingChannelCreateInput;

    @Field(() => MessagingChannelUpdateInput, {nullable:false})
    @Type(() => MessagingChannelUpdateInput)
    update!: MessagingChannelUpdateInput;
}

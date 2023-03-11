import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelUpdateInput } from '../inputs/messaging-channel-update.input';
import { Type } from 'class-transformer';
import { MessagingChannelWhereUniqueInput } from '../inputs/messaging-channel-where-unique.input';

@ArgsType()
export class UpdateOneMessagingChannelArgs {

    @Field(() => MessagingChannelUpdateInput, {nullable:false})
    @Type(() => MessagingChannelUpdateInput)
    data!: MessagingChannelUpdateInput;

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:false})
    @Type(() => MessagingChannelWhereUniqueInput)
    where!: MessagingChannelWhereUniqueInput;
}

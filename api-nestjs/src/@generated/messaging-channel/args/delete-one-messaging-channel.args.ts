import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelWhereUniqueInput } from '../inputs/messaging-channel-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMessagingChannelArgs {

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:false})
    @Type(() => MessagingChannelWhereUniqueInput)
    where!: MessagingChannelWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelWhereUniqueInput } from './messaging-channel-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingChannelCreateWithoutUserInput } from './messaging-channel-create-without-user.input';

@InputType()
export class MessagingChannelCreateOrConnectWithoutUserInput {

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:false})
    @Type(() => MessagingChannelWhereUniqueInput)
    where!: MessagingChannelWhereUniqueInput;

    @Field(() => MessagingChannelCreateWithoutUserInput, {nullable:false})
    @Type(() => MessagingChannelCreateWithoutUserInput)
    create!: MessagingChannelCreateWithoutUserInput;
}

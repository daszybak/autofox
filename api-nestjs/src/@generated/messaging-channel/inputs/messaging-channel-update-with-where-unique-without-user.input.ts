import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelWhereUniqueInput } from './messaging-channel-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingChannelUpdateWithoutUserInput } from './messaging-channel-update-without-user.input';

@InputType()
export class MessagingChannelUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:false})
    @Type(() => MessagingChannelWhereUniqueInput)
    where!: MessagingChannelWhereUniqueInput;

    @Field(() => MessagingChannelUpdateWithoutUserInput, {nullable:false})
    @Type(() => MessagingChannelUpdateWithoutUserInput)
    data!: MessagingChannelUpdateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelWhereUniqueInput } from './messaging-channel-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingChannelUpdateWithoutUserInput } from './messaging-channel-update-without-user.input';
import { MessagingChannelCreateWithoutUserInput } from './messaging-channel-create-without-user.input';

@InputType()
export class MessagingChannelUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:false})
    @Type(() => MessagingChannelWhereUniqueInput)
    where!: MessagingChannelWhereUniqueInput;

    @Field(() => MessagingChannelUpdateWithoutUserInput, {nullable:false})
    @Type(() => MessagingChannelUpdateWithoutUserInput)
    update!: MessagingChannelUpdateWithoutUserInput;

    @Field(() => MessagingChannelCreateWithoutUserInput, {nullable:false})
    @Type(() => MessagingChannelCreateWithoutUserInput)
    create!: MessagingChannelCreateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessagingChannelInput } from './user-create-without-messaging-channel.input';

@InputType()
export class UserCreateOrConnectWithoutMessagingChannelInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessagingChannelInput, {nullable:false})
    @Type(() => UserCreateWithoutMessagingChannelInput)
    create!: UserCreateWithoutMessagingChannelInput;
}

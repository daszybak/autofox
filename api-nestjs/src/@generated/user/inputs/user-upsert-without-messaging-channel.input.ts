import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMessagingChannelInput } from './user-update-without-messaging-channel.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessagingChannelInput } from './user-create-without-messaging-channel.input';

@InputType()
export class UserUpsertWithoutMessagingChannelInput {

    @Field(() => UserUpdateWithoutMessagingChannelInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessagingChannelInput)
    update!: UserUpdateWithoutMessagingChannelInput;

    @Field(() => UserCreateWithoutMessagingChannelInput, {nullable:false})
    @Type(() => UserCreateWithoutMessagingChannelInput)
    create!: UserCreateWithoutMessagingChannelInput;
}

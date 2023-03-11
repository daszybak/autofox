import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessagingChannelInput } from './user-create-without-messaging-channel.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessagingChannelInput } from './user-create-or-connect-without-messaging-channel.input';
import { UserUpsertWithoutMessagingChannelInput } from './user-upsert-without-messaging-channel.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMessagingChannelInput } from './user-update-without-messaging-channel.input';

@InputType()
export class UserUpdateOneRequiredWithoutMessagingChannelNestedInput {

    @Field(() => UserCreateWithoutMessagingChannelInput, {nullable:true})
    @Type(() => UserCreateWithoutMessagingChannelInput)
    create?: UserCreateWithoutMessagingChannelInput;

    @Field(() => UserCreateOrConnectWithoutMessagingChannelInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessagingChannelInput)
    connectOrCreate?: UserCreateOrConnectWithoutMessagingChannelInput;

    @Field(() => UserUpsertWithoutMessagingChannelInput, {nullable:true})
    @Type(() => UserUpsertWithoutMessagingChannelInput)
    upsert?: UserUpsertWithoutMessagingChannelInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessagingChannelInput, {nullable:true})
    @Type(() => UserUpdateWithoutMessagingChannelInput)
    update?: UserUpdateWithoutMessagingChannelInput;
}

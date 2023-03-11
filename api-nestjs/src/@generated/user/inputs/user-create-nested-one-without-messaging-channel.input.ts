import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessagingChannelInput } from './user-create-without-messaging-channel.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessagingChannelInput } from './user-create-or-connect-without-messaging-channel.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMessagingChannelInput {

    @Field(() => UserCreateWithoutMessagingChannelInput, {nullable:true})
    @Type(() => UserCreateWithoutMessagingChannelInput)
    create?: UserCreateWithoutMessagingChannelInput;

    @Field(() => UserCreateOrConnectWithoutMessagingChannelInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessagingChannelInput)
    connectOrCreate?: UserCreateOrConnectWithoutMessagingChannelInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

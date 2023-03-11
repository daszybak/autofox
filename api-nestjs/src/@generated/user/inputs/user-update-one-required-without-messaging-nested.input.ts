import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessagingInput } from './user-create-without-messaging.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessagingInput } from './user-create-or-connect-without-messaging.input';
import { UserUpsertWithoutMessagingInput } from './user-upsert-without-messaging.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMessagingInput } from './user-update-without-messaging.input';

@InputType()
export class UserUpdateOneRequiredWithoutMessagingNestedInput {

    @Field(() => UserCreateWithoutMessagingInput, {nullable:true})
    @Type(() => UserCreateWithoutMessagingInput)
    create?: UserCreateWithoutMessagingInput;

    @Field(() => UserCreateOrConnectWithoutMessagingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessagingInput)
    connectOrCreate?: UserCreateOrConnectWithoutMessagingInput;

    @Field(() => UserUpsertWithoutMessagingInput, {nullable:true})
    @Type(() => UserUpsertWithoutMessagingInput)
    upsert?: UserUpsertWithoutMessagingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessagingInput, {nullable:true})
    @Type(() => UserUpdateWithoutMessagingInput)
    update?: UserUpdateWithoutMessagingInput;
}

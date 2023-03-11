import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessagingInput } from './user-create-without-messaging.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessagingInput } from './user-create-or-connect-without-messaging.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMessagingInput {

    @Field(() => UserCreateWithoutMessagingInput, {nullable:true})
    @Type(() => UserCreateWithoutMessagingInput)
    create?: UserCreateWithoutMessagingInput;

    @Field(() => UserCreateOrConnectWithoutMessagingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessagingInput)
    connectOrCreate?: UserCreateOrConnectWithoutMessagingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}

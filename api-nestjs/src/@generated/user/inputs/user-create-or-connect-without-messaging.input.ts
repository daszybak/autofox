import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessagingInput } from './user-create-without-messaging.input';

@InputType()
export class UserCreateOrConnectWithoutMessagingInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessagingInput, {nullable:false})
    @Type(() => UserCreateWithoutMessagingInput)
    create!: UserCreateWithoutMessagingInput;
}

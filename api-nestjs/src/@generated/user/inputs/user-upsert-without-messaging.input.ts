import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMessagingInput } from './user-update-without-messaging.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMessagingInput } from './user-create-without-messaging.input';

@InputType()
export class UserUpsertWithoutMessagingInput {

    @Field(() => UserUpdateWithoutMessagingInput, {nullable:false})
    @Type(() => UserUpdateWithoutMessagingInput)
    update!: UserUpdateWithoutMessagingInput;

    @Field(() => UserCreateWithoutMessagingInput, {nullable:false})
    @Type(() => UserCreateWithoutMessagingInput)
    create!: UserCreateWithoutMessagingInput;
}

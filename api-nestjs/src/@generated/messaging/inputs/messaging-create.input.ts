import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutMessagingInput } from '../../user/inputs/user-create-nested-one-without-messaging.input';

@InputType()
export class MessagingCreateInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsIn([0, 1, 2, 3, 4])
    device_type!: number;

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => UserCreateNestedOneWithoutMessagingInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMessagingInput;
}

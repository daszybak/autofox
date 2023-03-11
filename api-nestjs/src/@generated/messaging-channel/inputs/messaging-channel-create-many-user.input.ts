import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class MessagingChannelCreateManyUserInput {

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
}

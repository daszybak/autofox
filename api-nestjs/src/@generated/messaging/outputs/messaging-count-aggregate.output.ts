import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessagingCountAggregate {

    @Field(() => Int, {nullable:false})
    messaging_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    deleted_at!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    device_type!: number;

    @Field(() => Int, {nullable:false})
    platform!: number;

    @Field(() => Int, {nullable:false})
    user_sub!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

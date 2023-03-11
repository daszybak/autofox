import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessagingChannelMinAggregate {

    @Field(() => Int, {nullable:true})
    messaging_channel_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    device_type?: number;

    @Field(() => String, {nullable:true})
    platform?: string;

    @Field(() => String, {nullable:true})
    user_sub?: string;
}

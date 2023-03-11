import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessagingCountAggregate } from './messaging-count-aggregate.output';
import { MessagingAvgAggregate } from './messaging-avg-aggregate.output';
import { MessagingSumAggregate } from './messaging-sum-aggregate.output';
import { MessagingMinAggregate } from './messaging-min-aggregate.output';
import { MessagingMaxAggregate } from './messaging-max-aggregate.output';

@ObjectType()
export class MessagingGroupBy {

    @Field(() => Int, {nullable:false})
    messaging_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Int, {nullable:false})
    device_type!: number;

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => MessagingCountAggregate, {nullable:true})
    _count?: MessagingCountAggregate;

    @Field(() => MessagingAvgAggregate, {nullable:true})
    _avg?: MessagingAvgAggregate;

    @Field(() => MessagingSumAggregate, {nullable:true})
    _sum?: MessagingSumAggregate;

    @Field(() => MessagingMinAggregate, {nullable:true})
    _min?: MessagingMinAggregate;

    @Field(() => MessagingMaxAggregate, {nullable:true})
    _max?: MessagingMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ListCountAggregate } from './list-count-aggregate.output';
import { ListAvgAggregate } from './list-avg-aggregate.output';
import { ListSumAggregate } from './list-sum-aggregate.output';
import { ListMinAggregate } from './list-min-aggregate.output';
import { ListMaxAggregate } from './list-max-aggregate.output';

@ObjectType()
export class ListGroupBy {

    @Field(() => Int, {nullable:false})
    list_id!: number;

    @Field(() => Int, {nullable:false})
    list_type!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    search_params!: string;

    @Field(() => Boolean, {nullable:false})
    is_notifiable_by_email!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_notifiable_by_push!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_notifiable_by_sms!: boolean;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => ListCountAggregate, {nullable:true})
    _count?: ListCountAggregate;

    @Field(() => ListAvgAggregate, {nullable:true})
    _avg?: ListAvgAggregate;

    @Field(() => ListSumAggregate, {nullable:true})
    _sum?: ListSumAggregate;

    @Field(() => ListMinAggregate, {nullable:true})
    _min?: ListMinAggregate;

    @Field(() => ListMaxAggregate, {nullable:true})
    _max?: ListMaxAggregate;
}

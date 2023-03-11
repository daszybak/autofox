import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ListAdCountAggregate } from './list-ad-count-aggregate.output';
import { ListAdAvgAggregate } from './list-ad-avg-aggregate.output';
import { ListAdSumAggregate } from './list-ad-sum-aggregate.output';
import { ListAdMinAggregate } from './list-ad-min-aggregate.output';
import { ListAdMaxAggregate } from './list-ad-max-aggregate.output';

@ObjectType()
export class AggregateListAd {

    @Field(() => ListAdCountAggregate, {nullable:true})
    _count?: ListAdCountAggregate;

    @Field(() => ListAdAvgAggregate, {nullable:true})
    _avg?: ListAdAvgAggregate;

    @Field(() => ListAdSumAggregate, {nullable:true})
    _sum?: ListAdSumAggregate;

    @Field(() => ListAdMinAggregate, {nullable:true})
    _min?: ListAdMinAggregate;

    @Field(() => ListAdMaxAggregate, {nullable:true})
    _max?: ListAdMaxAggregate;
}

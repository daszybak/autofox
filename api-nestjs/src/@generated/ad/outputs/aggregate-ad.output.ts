import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdCountAggregate } from './ad-count-aggregate.output';
import { AdAvgAggregate } from './ad-avg-aggregate.output';
import { AdSumAggregate } from './ad-sum-aggregate.output';
import { AdMinAggregate } from './ad-min-aggregate.output';
import { AdMaxAggregate } from './ad-max-aggregate.output';

@ObjectType()
export class AggregateAd {

    @Field(() => AdCountAggregate, {nullable:true})
    _count?: AdCountAggregate;

    @Field(() => AdAvgAggregate, {nullable:true})
    _avg?: AdAvgAggregate;

    @Field(() => AdSumAggregate, {nullable:true})
    _sum?: AdSumAggregate;

    @Field(() => AdMinAggregate, {nullable:true})
    _min?: AdMinAggregate;

    @Field(() => AdMaxAggregate, {nullable:true})
    _max?: AdMaxAggregate;
}

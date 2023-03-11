import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdAutoCountAggregate } from './ad-auto-count-aggregate.output';
import { AdAutoAvgAggregate } from './ad-auto-avg-aggregate.output';
import { AdAutoSumAggregate } from './ad-auto-sum-aggregate.output';
import { AdAutoMinAggregate } from './ad-auto-min-aggregate.output';
import { AdAutoMaxAggregate } from './ad-auto-max-aggregate.output';

@ObjectType()
export class AggregateAdAuto {

    @Field(() => AdAutoCountAggregate, {nullable:true})
    _count?: AdAutoCountAggregate;

    @Field(() => AdAutoAvgAggregate, {nullable:true})
    _avg?: AdAutoAvgAggregate;

    @Field(() => AdAutoSumAggregate, {nullable:true})
    _sum?: AdAutoSumAggregate;

    @Field(() => AdAutoMinAggregate, {nullable:true})
    _min?: AdAutoMinAggregate;

    @Field(() => AdAutoMaxAggregate, {nullable:true})
    _max?: AdAutoMaxAggregate;
}

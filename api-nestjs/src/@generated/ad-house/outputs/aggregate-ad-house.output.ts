import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdHouseCountAggregate } from './ad-house-count-aggregate.output';
import { AdHouseAvgAggregate } from './ad-house-avg-aggregate.output';
import { AdHouseSumAggregate } from './ad-house-sum-aggregate.output';
import { AdHouseMinAggregate } from './ad-house-min-aggregate.output';
import { AdHouseMaxAggregate } from './ad-house-max-aggregate.output';

@ObjectType()
export class AggregateAdHouse {

    @Field(() => AdHouseCountAggregate, {nullable:true})
    _count?: AdHouseCountAggregate;

    @Field(() => AdHouseAvgAggregate, {nullable:true})
    _avg?: AdHouseAvgAggregate;

    @Field(() => AdHouseSumAggregate, {nullable:true})
    _sum?: AdHouseSumAggregate;

    @Field(() => AdHouseMinAggregate, {nullable:true})
    _min?: AdHouseMinAggregate;

    @Field(() => AdHouseMaxAggregate, {nullable:true})
    _max?: AdHouseMaxAggregate;
}

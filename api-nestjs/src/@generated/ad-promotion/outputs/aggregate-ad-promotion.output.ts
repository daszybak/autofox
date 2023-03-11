import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdPromotionCountAggregate } from './ad-promotion-count-aggregate.output';
import { AdPromotionAvgAggregate } from './ad-promotion-avg-aggregate.output';
import { AdPromotionSumAggregate } from './ad-promotion-sum-aggregate.output';
import { AdPromotionMinAggregate } from './ad-promotion-min-aggregate.output';
import { AdPromotionMaxAggregate } from './ad-promotion-max-aggregate.output';

@ObjectType()
export class AggregateAdPromotion {

    @Field(() => AdPromotionCountAggregate, {nullable:true})
    _count?: AdPromotionCountAggregate;

    @Field(() => AdPromotionAvgAggregate, {nullable:true})
    _avg?: AdPromotionAvgAggregate;

    @Field(() => AdPromotionSumAggregate, {nullable:true})
    _sum?: AdPromotionSumAggregate;

    @Field(() => AdPromotionMinAggregate, {nullable:true})
    _min?: AdPromotionMinAggregate;

    @Field(() => AdPromotionMaxAggregate, {nullable:true})
    _max?: AdPromotionMaxAggregate;
}

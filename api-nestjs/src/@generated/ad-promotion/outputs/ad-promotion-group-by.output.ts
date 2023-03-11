import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AdPromotionCountAggregate } from './ad-promotion-count-aggregate.output';
import { AdPromotionAvgAggregate } from './ad-promotion-avg-aggregate.output';
import { AdPromotionSumAggregate } from './ad-promotion-sum-aggregate.output';
import { AdPromotionMinAggregate } from './ad-promotion-min-aggregate.output';
import { AdPromotionMaxAggregate } from './ad-promotion-max-aggregate.output';

@ObjectType()
export class AdPromotionGroupBy {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => Date, {nullable:true})
    valid_from?: Date | string;

    @Field(() => Date, {nullable:true})
    valid_to?: Date | string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;

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

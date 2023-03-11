import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PromotionPlanCountAggregate } from './promotion-plan-count-aggregate.output';
import { PromotionPlanAvgAggregate } from './promotion-plan-avg-aggregate.output';
import { PromotionPlanSumAggregate } from './promotion-plan-sum-aggregate.output';
import { PromotionPlanMinAggregate } from './promotion-plan-min-aggregate.output';
import { PromotionPlanMaxAggregate } from './promotion-plan-max-aggregate.output';

@ObjectType()
export class PromotionPlanGroupBy {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Int, {nullable:false})
    validity_period!: number;

    @Field(() => Int, {nullable:true})
    promotion_region_cid?: number;

    @Field(() => Int, {nullable:false})
    promotion_plan_type!: number;

    @Field(() => PromotionPlanCountAggregate, {nullable:true})
    _count?: PromotionPlanCountAggregate;

    @Field(() => PromotionPlanAvgAggregate, {nullable:true})
    _avg?: PromotionPlanAvgAggregate;

    @Field(() => PromotionPlanSumAggregate, {nullable:true})
    _sum?: PromotionPlanSumAggregate;

    @Field(() => PromotionPlanMinAggregate, {nullable:true})
    _min?: PromotionPlanMinAggregate;

    @Field(() => PromotionPlanMaxAggregate, {nullable:true})
    _max?: PromotionPlanMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionPlanRelationCountAggregate } from './promotion-plan-relation-count-aggregate.output';
import { PromotionPlanRelationAvgAggregate } from './promotion-plan-relation-avg-aggregate.output';
import { PromotionPlanRelationSumAggregate } from './promotion-plan-relation-sum-aggregate.output';
import { PromotionPlanRelationMinAggregate } from './promotion-plan-relation-min-aggregate.output';
import { PromotionPlanRelationMaxAggregate } from './promotion-plan-relation-max-aggregate.output';

@ObjectType()
export class PromotionPlanRelationGroupBy {

    @Field(() => Int, {nullable:false})
    parent_promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    child_promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => Int, {nullable:false})
    reccurence!: number;

    @Field(() => PromotionPlanRelationCountAggregate, {nullable:true})
    _count?: PromotionPlanRelationCountAggregate;

    @Field(() => PromotionPlanRelationAvgAggregate, {nullable:true})
    _avg?: PromotionPlanRelationAvgAggregate;

    @Field(() => PromotionPlanRelationSumAggregate, {nullable:true})
    _sum?: PromotionPlanRelationSumAggregate;

    @Field(() => PromotionPlanRelationMinAggregate, {nullable:true})
    _min?: PromotionPlanRelationMinAggregate;

    @Field(() => PromotionPlanRelationMaxAggregate, {nullable:true})
    _max?: PromotionPlanRelationMaxAggregate;
}

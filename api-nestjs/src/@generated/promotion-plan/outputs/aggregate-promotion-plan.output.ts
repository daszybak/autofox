import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PromotionPlanCountAggregate } from './promotion-plan-count-aggregate.output';
import { PromotionPlanAvgAggregate } from './promotion-plan-avg-aggregate.output';
import { PromotionPlanSumAggregate } from './promotion-plan-sum-aggregate.output';
import { PromotionPlanMinAggregate } from './promotion-plan-min-aggregate.output';
import { PromotionPlanMaxAggregate } from './promotion-plan-max-aggregate.output';

@ObjectType()
export class AggregatePromotionPlan {

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

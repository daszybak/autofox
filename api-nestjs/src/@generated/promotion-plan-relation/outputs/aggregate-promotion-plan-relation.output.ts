import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PromotionPlanRelationCountAggregate } from './promotion-plan-relation-count-aggregate.output';
import { PromotionPlanRelationAvgAggregate } from './promotion-plan-relation-avg-aggregate.output';
import { PromotionPlanRelationSumAggregate } from './promotion-plan-relation-sum-aggregate.output';
import { PromotionPlanRelationMinAggregate } from './promotion-plan-relation-min-aggregate.output';
import { PromotionPlanRelationMaxAggregate } from './promotion-plan-relation-max-aggregate.output';

@ObjectType()
export class AggregatePromotionPlanRelation {

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

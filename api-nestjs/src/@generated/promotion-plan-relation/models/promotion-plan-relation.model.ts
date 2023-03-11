import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionPlan } from '../../promotion-plan/models/promotion-plan.model';

@ObjectType()
export class PromotionPlanRelation {

    @Field(() => Int, {nullable:false})
    parent_promotion_plan_id!: number;

    @Field(() => PromotionPlan, {nullable:false})
    parent_promotion_plan?: PromotionPlan;

    @Field(() => Int, {nullable:false})
    child_promotion_plan_id!: number;

    @Field(() => PromotionPlan, {nullable:false})
    child_promotion_plan?: PromotionPlan;

    @Field(() => Int, {nullable:false,defaultValue:1})
    count!: number;

    /**
     * 0 - Daily, 1 - Weekly, 2 - Monthly, 3 - Yearly, 4 - One-time
     */
    @Field(() => Int, {nullable:false,defaultValue:2,description:'0 - Daily, 1 - Weekly, 2 - Monthly, 3 - Yearly, 4 - One-time'})
    reccurence!: number;
}

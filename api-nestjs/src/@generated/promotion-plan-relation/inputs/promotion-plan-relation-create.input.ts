import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput } from '../../promotion-plan/inputs/promotion-plan-create-nested-one-without-parent-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateNestedOneWithoutChildPromotionPlanInput } from '../../promotion-plan/inputs/promotion-plan-create-nested-one-without-child-promotion-plan.input';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class PromotionPlanRelationCreateInput {

    @Field(() => PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput)
    parent_promotion_plan!: PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput;

    @Field(() => PromotionPlanCreateNestedOneWithoutChildPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanCreateNestedOneWithoutChildPromotionPlanInput)
    child_promotion_plan!: PromotionPlanCreateNestedOneWithoutChildPromotionPlanInput;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Int, {nullable:true})
    @Validator.IsIn([0, 1, 2, 3, 4])
    reccurence?: number;
}

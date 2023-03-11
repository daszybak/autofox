import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput } from '../../promotion-plan/inputs/promotion-plan-create-nested-one-without-parent-promotion-plan.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class PromotionPlanRelationCreateWithoutChild_promotion_planInput {

    @Field(() => PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput)
    parent_promotion_plan!: PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Int, {nullable:true})
    @Validator.IsIn([0, 1, 2, 3, 4])
    reccurence?: number;
}

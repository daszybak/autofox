import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PromotionPlanRelationParent_promotion_plan_idChild_promotion_plan_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    parent_promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    child_promotion_plan_id!: number;
}

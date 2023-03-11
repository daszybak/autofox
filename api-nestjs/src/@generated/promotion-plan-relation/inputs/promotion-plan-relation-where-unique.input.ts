import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationParent_promotion_plan_idChild_promotion_plan_idCompoundUniqueInput } from './promotion-plan-relation-parent-promotion-plan-id-child-promotion-plan-id-compound-unique.input';

@InputType()
export class PromotionPlanRelationWhereUniqueInput {

    @Field(() => PromotionPlanRelationParent_promotion_plan_idChild_promotion_plan_idCompoundUniqueInput, {nullable:true})
    parent_promotion_plan_id_child_promotion_plan_id?: PromotionPlanRelationParent_promotion_plan_idChild_promotion_plan_idCompoundUniqueInput;
}

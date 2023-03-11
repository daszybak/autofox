import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereUniqueInput } from './promotion-plan-relation-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationUpdateWithoutParent_promotion_planInput } from './promotion-plan-relation-update-without-parent-promotion-plan.input';

@InputType()
export class PromotionPlanRelationUpdateWithWhereUniqueWithoutParent_promotion_planInput {

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    where!: PromotionPlanRelationWhereUniqueInput;

    @Field(() => PromotionPlanRelationUpdateWithoutParent_promotion_planInput, {nullable:false})
    @Type(() => PromotionPlanRelationUpdateWithoutParent_promotion_planInput)
    data!: PromotionPlanRelationUpdateWithoutParent_promotion_planInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereUniqueInput } from './promotion-plan-relation-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationUpdateWithoutChild_promotion_planInput } from './promotion-plan-relation-update-without-child-promotion-plan.input';

@InputType()
export class PromotionPlanRelationUpdateWithWhereUniqueWithoutChild_promotion_planInput {

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    where!: PromotionPlanRelationWhereUniqueInput;

    @Field(() => PromotionPlanRelationUpdateWithoutChild_promotion_planInput, {nullable:false})
    @Type(() => PromotionPlanRelationUpdateWithoutChild_promotion_planInput)
    data!: PromotionPlanRelationUpdateWithoutChild_promotion_planInput;
}

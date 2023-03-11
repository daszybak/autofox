import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereUniqueInput } from './promotion-plan-relation-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationCreateWithoutChild_promotion_planInput } from './promotion-plan-relation-create-without-child-promotion-plan.input';

@InputType()
export class PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput {

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    where!: PromotionPlanRelationWhereUniqueInput;

    @Field(() => PromotionPlanRelationCreateWithoutChild_promotion_planInput, {nullable:false})
    @Type(() => PromotionPlanRelationCreateWithoutChild_promotion_planInput)
    create!: PromotionPlanRelationCreateWithoutChild_promotion_planInput;
}

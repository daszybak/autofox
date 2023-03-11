import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanUpdateWithoutParentPromotionPlanInput } from './promotion-plan-update-without-parent-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutParentPromotionPlanInput } from './promotion-plan-create-without-parent-promotion-plan.input';

@InputType()
export class PromotionPlanUpsertWithoutParentPromotionPlanInput {

    @Field(() => PromotionPlanUpdateWithoutParentPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanUpdateWithoutParentPromotionPlanInput)
    update!: PromotionPlanUpdateWithoutParentPromotionPlanInput;

    @Field(() => PromotionPlanCreateWithoutParentPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutParentPromotionPlanInput)
    create!: PromotionPlanCreateWithoutParentPromotionPlanInput;
}

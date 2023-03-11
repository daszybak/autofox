import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanUpdateWithoutChildPromotionPlanInput } from './promotion-plan-update-without-child-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutChildPromotionPlanInput } from './promotion-plan-create-without-child-promotion-plan.input';

@InputType()
export class PromotionPlanUpsertWithoutChildPromotionPlanInput {

    @Field(() => PromotionPlanUpdateWithoutChildPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanUpdateWithoutChildPromotionPlanInput)
    update!: PromotionPlanUpdateWithoutChildPromotionPlanInput;

    @Field(() => PromotionPlanCreateWithoutChildPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutChildPromotionPlanInput)
    create!: PromotionPlanCreateWithoutChildPromotionPlanInput;
}

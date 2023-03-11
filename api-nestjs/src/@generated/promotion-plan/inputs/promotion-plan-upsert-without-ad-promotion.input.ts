import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanUpdateWithoutAdPromotionInput } from './promotion-plan-update-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutAdPromotionInput } from './promotion-plan-create-without-ad-promotion.input';

@InputType()
export class PromotionPlanUpsertWithoutAdPromotionInput {

    @Field(() => PromotionPlanUpdateWithoutAdPromotionInput, {nullable:false})
    @Type(() => PromotionPlanUpdateWithoutAdPromotionInput)
    update!: PromotionPlanUpdateWithoutAdPromotionInput;

    @Field(() => PromotionPlanCreateWithoutAdPromotionInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutAdPromotionInput)
    create!: PromotionPlanCreateWithoutAdPromotionInput;
}

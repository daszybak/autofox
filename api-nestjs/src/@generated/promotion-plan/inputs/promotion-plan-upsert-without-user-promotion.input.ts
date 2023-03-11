import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanUpdateWithoutUserPromotionInput } from './promotion-plan-update-without-user-promotion.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutUserPromotionInput } from './promotion-plan-create-without-user-promotion.input';

@InputType()
export class PromotionPlanUpsertWithoutUserPromotionInput {

    @Field(() => PromotionPlanUpdateWithoutUserPromotionInput, {nullable:false})
    @Type(() => PromotionPlanUpdateWithoutUserPromotionInput)
    update!: PromotionPlanUpdateWithoutUserPromotionInput;

    @Field(() => PromotionPlanCreateWithoutUserPromotionInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutUserPromotionInput)
    create!: PromotionPlanCreateWithoutUserPromotionInput;
}

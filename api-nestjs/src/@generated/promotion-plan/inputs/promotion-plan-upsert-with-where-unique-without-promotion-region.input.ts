import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanUpdateWithoutPromotion_regionInput } from './promotion-plan-update-without-promotion-region.input';
import { PromotionPlanCreateWithoutPromotion_regionInput } from './promotion-plan-create-without-promotion-region.input';

@InputType()
export class PromotionPlanUpsertWithWhereUniqueWithoutPromotion_regionInput {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanUpdateWithoutPromotion_regionInput, {nullable:false})
    @Type(() => PromotionPlanUpdateWithoutPromotion_regionInput)
    update!: PromotionPlanUpdateWithoutPromotion_regionInput;

    @Field(() => PromotionPlanCreateWithoutPromotion_regionInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutPromotion_regionInput)
    create!: PromotionPlanCreateWithoutPromotion_regionInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanUpdateWithoutPromotion_regionInput } from './promotion-plan-update-without-promotion-region.input';

@InputType()
export class PromotionPlanUpdateWithWhereUniqueWithoutPromotion_regionInput {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanUpdateWithoutPromotion_regionInput, {nullable:false})
    @Type(() => PromotionPlanUpdateWithoutPromotion_regionInput)
    data!: PromotionPlanUpdateWithoutPromotion_regionInput;
}

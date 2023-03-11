import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionUpdateWithoutPromotion_planInput } from './ad-promotion-update-without-promotion-plan.input';

@InputType()
export class AdPromotionUpdateWithWhereUniqueWithoutPromotion_planInput {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionUpdateWithoutPromotion_planInput, {nullable:false})
    @Type(() => AdPromotionUpdateWithoutPromotion_planInput)
    data!: AdPromotionUpdateWithoutPromotion_planInput;
}

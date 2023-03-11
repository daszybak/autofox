import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionUpdateWithoutPromotion_planInput } from './ad-promotion-update-without-promotion-plan.input';
import { AdPromotionCreateWithoutPromotion_planInput } from './ad-promotion-create-without-promotion-plan.input';

@InputType()
export class AdPromotionUpsertWithWhereUniqueWithoutPromotion_planInput {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionUpdateWithoutPromotion_planInput, {nullable:false})
    @Type(() => AdPromotionUpdateWithoutPromotion_planInput)
    update!: AdPromotionUpdateWithoutPromotion_planInput;

    @Field(() => AdPromotionCreateWithoutPromotion_planInput, {nullable:false})
    @Type(() => AdPromotionCreateWithoutPromotion_planInput)
    create!: AdPromotionCreateWithoutPromotion_planInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateWithoutPromotion_planInput } from './ad-promotion-create-without-promotion-plan.input';

@InputType()
export class AdPromotionCreateOrConnectWithoutPromotion_planInput {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionCreateWithoutPromotion_planInput, {nullable:false})
    @Type(() => AdPromotionCreateWithoutPromotion_planInput)
    create!: AdPromotionCreateWithoutPromotion_planInput;
}

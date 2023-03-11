import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionUpdateWithoutAdInput } from './ad-promotion-update-without-ad.input';
import { AdPromotionCreateWithoutAdInput } from './ad-promotion-create-without-ad.input';

@InputType()
export class AdPromotionUpsertWithWhereUniqueWithoutAdInput {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionUpdateWithoutAdInput, {nullable:false})
    @Type(() => AdPromotionUpdateWithoutAdInput)
    update!: AdPromotionUpdateWithoutAdInput;

    @Field(() => AdPromotionCreateWithoutAdInput, {nullable:false})
    @Type(() => AdPromotionCreateWithoutAdInput)
    create!: AdPromotionCreateWithoutAdInput;
}

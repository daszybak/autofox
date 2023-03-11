import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateWithoutAdPromotionInput } from './ad-update-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAdPromotionInput } from './ad-create-without-ad-promotion.input';

@InputType()
export class AdUpsertWithoutAdPromotionInput {

    @Field(() => AdUpdateWithoutAdPromotionInput, {nullable:false})
    @Type(() => AdUpdateWithoutAdPromotionInput)
    update!: AdUpdateWithoutAdPromotionInput;

    @Field(() => AdCreateWithoutAdPromotionInput, {nullable:false})
    @Type(() => AdCreateWithoutAdPromotionInput)
    create!: AdCreateWithoutAdPromotionInput;
}

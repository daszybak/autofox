import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateWithoutAdInput } from './ad-promotion-create-without-ad.input';

@InputType()
export class AdPromotionCreateOrConnectWithoutAdInput {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionCreateWithoutAdInput, {nullable:false})
    @Type(() => AdPromotionCreateWithoutAdInput)
    create!: AdPromotionCreateWithoutAdInput;
}

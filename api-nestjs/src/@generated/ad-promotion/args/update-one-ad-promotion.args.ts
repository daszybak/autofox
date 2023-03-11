import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionUpdateInput } from '../inputs/ad-promotion-update.input';
import { Type } from 'class-transformer';
import { AdPromotionWhereUniqueInput } from '../inputs/ad-promotion-where-unique.input';

@ArgsType()
export class UpdateOneAdPromotionArgs {

    @Field(() => AdPromotionUpdateInput, {nullable:false})
    @Type(() => AdPromotionUpdateInput)
    data!: AdPromotionUpdateInput;

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;
}

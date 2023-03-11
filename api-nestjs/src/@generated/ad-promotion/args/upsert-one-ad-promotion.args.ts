import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from '../inputs/ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateInput } from '../inputs/ad-promotion-create.input';
import { AdPromotionUpdateInput } from '../inputs/ad-promotion-update.input';

@ArgsType()
export class UpsertOneAdPromotionArgs {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionCreateInput, {nullable:false})
    @Type(() => AdPromotionCreateInput)
    create!: AdPromotionCreateInput;

    @Field(() => AdPromotionUpdateInput, {nullable:false})
    @Type(() => AdPromotionUpdateInput)
    update!: AdPromotionUpdateInput;
}

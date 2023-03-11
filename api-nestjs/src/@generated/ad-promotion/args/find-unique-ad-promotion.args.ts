import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from '../inputs/ad-promotion-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdPromotionArgs {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;
}

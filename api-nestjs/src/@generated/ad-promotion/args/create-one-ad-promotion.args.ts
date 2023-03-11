import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionCreateInput } from '../inputs/ad-promotion-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdPromotionArgs {

    @Field(() => AdPromotionCreateInput, {nullable:false})
    @Type(() => AdPromotionCreateInput)
    data!: AdPromotionCreateInput;
}

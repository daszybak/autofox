import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionCreateManyInput } from '../inputs/ad-promotion-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdPromotionArgs {

    @Field(() => [AdPromotionCreateManyInput], {nullable:false})
    @Type(() => AdPromotionCreateManyInput)
    data!: Array<AdPromotionCreateManyInput>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionWhereInput } from '../inputs/ad-promotion-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdPromotionArgs {

    @Field(() => AdPromotionWhereInput, {nullable:true})
    @Type(() => AdPromotionWhereInput)
    where?: AdPromotionWhereInput;
}

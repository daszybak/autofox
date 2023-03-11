import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereInput } from './ad-promotion-where.input';

@InputType()
export class AdPromotionListRelationFilter {

    @Field(() => AdPromotionWhereInput, {nullable:true})
    every?: AdPromotionWhereInput;

    @Field(() => AdPromotionWhereInput, {nullable:true})
    some?: AdPromotionWhereInput;

    @Field(() => AdPromotionWhereInput, {nullable:true})
    none?: AdPromotionWhereInput;
}

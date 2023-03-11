import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionWhereInput } from '../inputs/ad-promotion-where.input';
import { Type } from 'class-transformer';
import { AdPromotionOrderByWithRelationInput } from '../inputs/ad-promotion-order-by-with-relation.input';
import { AdPromotionWhereUniqueInput } from '../inputs/ad-promotion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdPromotionScalarFieldEnum } from '../enums/ad-promotion-scalar-field.enum';

@ArgsType()
export class FindFirstAdPromotionArgs {

    @Field(() => AdPromotionWhereInput, {nullable:true})
    @Type(() => AdPromotionWhereInput)
    where?: AdPromotionWhereInput;

    @Field(() => [AdPromotionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdPromotionOrderByWithRelationInput>;

    @Field(() => AdPromotionWhereUniqueInput, {nullable:true})
    cursor?: AdPromotionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdPromotionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdPromotionScalarFieldEnum>;
}

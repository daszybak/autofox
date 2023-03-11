import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionWhereInput } from '../inputs/ad-promotion-where.input';
import { Type } from 'class-transformer';
import { AdPromotionOrderByWithRelationInput } from '../inputs/ad-promotion-order-by-with-relation.input';
import { AdPromotionWhereUniqueInput } from '../inputs/ad-promotion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdPromotionCountAggregateInput } from '../inputs/ad-promotion-count-aggregate.input';
import { AdPromotionAvgAggregateInput } from '../inputs/ad-promotion-avg-aggregate.input';
import { AdPromotionSumAggregateInput } from '../inputs/ad-promotion-sum-aggregate.input';
import { AdPromotionMinAggregateInput } from '../inputs/ad-promotion-min-aggregate.input';
import { AdPromotionMaxAggregateInput } from '../inputs/ad-promotion-max-aggregate.input';

@ArgsType()
export class AdPromotionAggregateArgs {

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

    @Field(() => AdPromotionCountAggregateInput, {nullable:true})
    _count?: AdPromotionCountAggregateInput;

    @Field(() => AdPromotionAvgAggregateInput, {nullable:true})
    _avg?: AdPromotionAvgAggregateInput;

    @Field(() => AdPromotionSumAggregateInput, {nullable:true})
    _sum?: AdPromotionSumAggregateInput;

    @Field(() => AdPromotionMinAggregateInput, {nullable:true})
    _min?: AdPromotionMinAggregateInput;

    @Field(() => AdPromotionMaxAggregateInput, {nullable:true})
    _max?: AdPromotionMaxAggregateInput;
}

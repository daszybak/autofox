import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanWhereInput } from '../inputs/promotion-plan-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanOrderByWithRelationInput } from '../inputs/promotion-plan-order-by-with-relation.input';
import { PromotionPlanWhereUniqueInput } from '../inputs/promotion-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromotionPlanCountAggregateInput } from '../inputs/promotion-plan-count-aggregate.input';
import { PromotionPlanAvgAggregateInput } from '../inputs/promotion-plan-avg-aggregate.input';
import { PromotionPlanSumAggregateInput } from '../inputs/promotion-plan-sum-aggregate.input';
import { PromotionPlanMinAggregateInput } from '../inputs/promotion-plan-min-aggregate.input';
import { PromotionPlanMaxAggregateInput } from '../inputs/promotion-plan-max-aggregate.input';

@ArgsType()
export class PromotionPlanAggregateArgs {

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    where?: PromotionPlanWhereInput;

    @Field(() => [PromotionPlanOrderByWithRelationInput], {nullable:true})
    @Type(() => PromotionPlanOrderByWithRelationInput)
    orderBy?: Array<PromotionPlanOrderByWithRelationInput>;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    cursor?: PromotionPlanWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PromotionPlanCountAggregateInput, {nullable:true})
    @Type(() => PromotionPlanCountAggregateInput)
    _count?: PromotionPlanCountAggregateInput;

    @Field(() => PromotionPlanAvgAggregateInput, {nullable:true})
    @Type(() => PromotionPlanAvgAggregateInput)
    _avg?: PromotionPlanAvgAggregateInput;

    @Field(() => PromotionPlanSumAggregateInput, {nullable:true})
    @Type(() => PromotionPlanSumAggregateInput)
    _sum?: PromotionPlanSumAggregateInput;

    @Field(() => PromotionPlanMinAggregateInput, {nullable:true})
    @Type(() => PromotionPlanMinAggregateInput)
    _min?: PromotionPlanMinAggregateInput;

    @Field(() => PromotionPlanMaxAggregateInput, {nullable:true})
    @Type(() => PromotionPlanMaxAggregateInput)
    _max?: PromotionPlanMaxAggregateInput;
}

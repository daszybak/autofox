import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanWhereInput } from '../inputs/promotion-plan-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanOrderByWithAggregationInput } from '../inputs/promotion-plan-order-by-with-aggregation.input';
import { PromotionPlanScalarFieldEnum } from '../enums/promotion-plan-scalar-field.enum';
import { PromotionPlanScalarWhereWithAggregatesInput } from '../inputs/promotion-plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PromotionPlanCountAggregateInput } from '../inputs/promotion-plan-count-aggregate.input';
import { PromotionPlanAvgAggregateInput } from '../inputs/promotion-plan-avg-aggregate.input';
import { PromotionPlanSumAggregateInput } from '../inputs/promotion-plan-sum-aggregate.input';
import { PromotionPlanMinAggregateInput } from '../inputs/promotion-plan-min-aggregate.input';
import { PromotionPlanMaxAggregateInput } from '../inputs/promotion-plan-max-aggregate.input';

@ArgsType()
export class PromotionPlanGroupByArgs {

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    where?: PromotionPlanWhereInput;

    @Field(() => [PromotionPlanOrderByWithAggregationInput], {nullable:true})
    @Type(() => PromotionPlanOrderByWithAggregationInput)
    orderBy?: Array<PromotionPlanOrderByWithAggregationInput>;

    @Field(() => [PromotionPlanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PromotionPlanScalarFieldEnum>;

    @Field(() => PromotionPlanScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PromotionPlanScalarWhereWithAggregatesInput)
    having?: PromotionPlanScalarWhereWithAggregatesInput;

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

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereInput } from '../inputs/promotion-plan-relation-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationOrderByWithAggregationInput } from '../inputs/promotion-plan-relation-order-by-with-aggregation.input';
import { PromotionPlanRelationScalarFieldEnum } from '../enums/promotion-plan-relation-scalar-field.enum';
import { PromotionPlanRelationScalarWhereWithAggregatesInput } from '../inputs/promotion-plan-relation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PromotionPlanRelationCountAggregateInput } from '../inputs/promotion-plan-relation-count-aggregate.input';
import { PromotionPlanRelationAvgAggregateInput } from '../inputs/promotion-plan-relation-avg-aggregate.input';
import { PromotionPlanRelationSumAggregateInput } from '../inputs/promotion-plan-relation-sum-aggregate.input';
import { PromotionPlanRelationMinAggregateInput } from '../inputs/promotion-plan-relation-min-aggregate.input';
import { PromotionPlanRelationMaxAggregateInput } from '../inputs/promotion-plan-relation-max-aggregate.input';

@ArgsType()
export class PromotionPlanRelationGroupByArgs {

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    @Type(() => PromotionPlanRelationWhereInput)
    where?: PromotionPlanRelationWhereInput;

    @Field(() => [PromotionPlanRelationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PromotionPlanRelationOrderByWithAggregationInput>;

    @Field(() => [PromotionPlanRelationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PromotionPlanRelationScalarFieldEnum>;

    @Field(() => PromotionPlanRelationScalarWhereWithAggregatesInput, {nullable:true})
    having?: PromotionPlanRelationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PromotionPlanRelationCountAggregateInput, {nullable:true})
    _count?: PromotionPlanRelationCountAggregateInput;

    @Field(() => PromotionPlanRelationAvgAggregateInput, {nullable:true})
    _avg?: PromotionPlanRelationAvgAggregateInput;

    @Field(() => PromotionPlanRelationSumAggregateInput, {nullable:true})
    _sum?: PromotionPlanRelationSumAggregateInput;

    @Field(() => PromotionPlanRelationMinAggregateInput, {nullable:true})
    _min?: PromotionPlanRelationMinAggregateInput;

    @Field(() => PromotionPlanRelationMaxAggregateInput, {nullable:true})
    _max?: PromotionPlanRelationMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereInput } from '../inputs/promotion-plan-relation-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationOrderByWithRelationInput } from '../inputs/promotion-plan-relation-order-by-with-relation.input';
import { PromotionPlanRelationWhereUniqueInput } from '../inputs/promotion-plan-relation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromotionPlanRelationCountAggregateInput } from '../inputs/promotion-plan-relation-count-aggregate.input';
import { PromotionPlanRelationAvgAggregateInput } from '../inputs/promotion-plan-relation-avg-aggregate.input';
import { PromotionPlanRelationSumAggregateInput } from '../inputs/promotion-plan-relation-sum-aggregate.input';
import { PromotionPlanRelationMinAggregateInput } from '../inputs/promotion-plan-relation-min-aggregate.input';
import { PromotionPlanRelationMaxAggregateInput } from '../inputs/promotion-plan-relation-max-aggregate.input';

@ArgsType()
export class PromotionPlanRelationAggregateArgs {

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    @Type(() => PromotionPlanRelationWhereInput)
    where?: PromotionPlanRelationWhereInput;

    @Field(() => [PromotionPlanRelationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PromotionPlanRelationOrderByWithRelationInput>;

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:true})
    cursor?: PromotionPlanRelationWhereUniqueInput;

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

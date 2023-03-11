import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { PromotionPlanCountOrderByAggregateInput } from './promotion-plan-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { PromotionPlanAvgOrderByAggregateInput } from './promotion-plan-avg-order-by-aggregate.input';
import { PromotionPlanMaxOrderByAggregateInput } from './promotion-plan-max-order-by-aggregate.input';
import { PromotionPlanMinOrderByAggregateInput } from './promotion-plan-min-order-by-aggregate.input';
import { PromotionPlanSumOrderByAggregateInput } from './promotion-plan-sum-order-by-aggregate.input';

@InputType()
export class PromotionPlanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validity_period?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    promotion_region_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_type?: keyof typeof SortOrder;

    @Field(() => PromotionPlanCountOrderByAggregateInput, {nullable:true})
    @Type(() => PromotionPlanCountOrderByAggregateInput)
    _count?: PromotionPlanCountOrderByAggregateInput;

    @Field(() => PromotionPlanAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PromotionPlanAvgOrderByAggregateInput)
    _avg?: PromotionPlanAvgOrderByAggregateInput;

    @Field(() => PromotionPlanMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PromotionPlanMaxOrderByAggregateInput)
    _max?: PromotionPlanMaxOrderByAggregateInput;

    @Field(() => PromotionPlanMinOrderByAggregateInput, {nullable:true})
    @Type(() => PromotionPlanMinOrderByAggregateInput)
    _min?: PromotionPlanMinOrderByAggregateInput;

    @Field(() => PromotionPlanSumOrderByAggregateInput, {nullable:true})
    @Type(() => PromotionPlanSumOrderByAggregateInput)
    _sum?: PromotionPlanSumOrderByAggregateInput;
}

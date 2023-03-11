import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { PromotionPlanRelationCountOrderByAggregateInput } from './promotion-plan-relation-count-order-by-aggregate.input';
import { PromotionPlanRelationAvgOrderByAggregateInput } from './promotion-plan-relation-avg-order-by-aggregate.input';
import { PromotionPlanRelationMaxOrderByAggregateInput } from './promotion-plan-relation-max-order-by-aggregate.input';
import { PromotionPlanRelationMinOrderByAggregateInput } from './promotion-plan-relation-min-order-by-aggregate.input';
import { PromotionPlanRelationSumOrderByAggregateInput } from './promotion-plan-relation-sum-order-by-aggregate.input';

@InputType()
export class PromotionPlanRelationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    parent_promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    child_promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reccurence?: keyof typeof SortOrder;

    @Field(() => PromotionPlanRelationCountOrderByAggregateInput, {nullable:true})
    _count?: PromotionPlanRelationCountOrderByAggregateInput;

    @Field(() => PromotionPlanRelationAvgOrderByAggregateInput, {nullable:true})
    _avg?: PromotionPlanRelationAvgOrderByAggregateInput;

    @Field(() => PromotionPlanRelationMaxOrderByAggregateInput, {nullable:true})
    _max?: PromotionPlanRelationMaxOrderByAggregateInput;

    @Field(() => PromotionPlanRelationMinOrderByAggregateInput, {nullable:true})
    _min?: PromotionPlanRelationMinOrderByAggregateInput;

    @Field(() => PromotionPlanRelationSumOrderByAggregateInput, {nullable:true})
    _sum?: PromotionPlanRelationSumOrderByAggregateInput;
}

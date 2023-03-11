import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdPromotionCountOrderByAggregateInput } from './ad-promotion-count-order-by-aggregate.input';
import { AdPromotionAvgOrderByAggregateInput } from './ad-promotion-avg-order-by-aggregate.input';
import { AdPromotionMaxOrderByAggregateInput } from './ad-promotion-max-order-by-aggregate.input';
import { AdPromotionMinOrderByAggregateInput } from './ad-promotion-min-order-by-aggregate.input';
import { AdPromotionSumOrderByAggregateInput } from './ad-promotion-sum-order-by-aggregate.input';

@InputType()
export class AdPromotionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_sub?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    valid_from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    valid_to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_id?: keyof typeof SortOrder;

    @Field(() => AdPromotionCountOrderByAggregateInput, {nullable:true})
    _count?: AdPromotionCountOrderByAggregateInput;

    @Field(() => AdPromotionAvgOrderByAggregateInput, {nullable:true})
    _avg?: AdPromotionAvgOrderByAggregateInput;

    @Field(() => AdPromotionMaxOrderByAggregateInput, {nullable:true})
    _max?: AdPromotionMaxOrderByAggregateInput;

    @Field(() => AdPromotionMinOrderByAggregateInput, {nullable:true})
    _min?: AdPromotionMinOrderByAggregateInput;

    @Field(() => AdPromotionSumOrderByAggregateInput, {nullable:true})
    _sum?: AdPromotionSumOrderByAggregateInput;
}

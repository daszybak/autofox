import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { UserPromotionCountOrderByAggregateInput } from './user-promotion-count-order-by-aggregate.input';
import { UserPromotionAvgOrderByAggregateInput } from './user-promotion-avg-order-by-aggregate.input';
import { UserPromotionMaxOrderByAggregateInput } from './user-promotion-max-order-by-aggregate.input';
import { UserPromotionMinOrderByAggregateInput } from './user-promotion-min-order-by-aggregate.input';
import { UserPromotionSumOrderByAggregateInput } from './user-promotion-sum-order-by-aggregate.input';

@InputType()
export class UserPromotionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_sub?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    valid_from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    valid_to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_id?: keyof typeof SortOrder;

    @Field(() => UserPromotionCountOrderByAggregateInput, {nullable:true})
    _count?: UserPromotionCountOrderByAggregateInput;

    @Field(() => UserPromotionAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserPromotionAvgOrderByAggregateInput;

    @Field(() => UserPromotionMaxOrderByAggregateInput, {nullable:true})
    _max?: UserPromotionMaxOrderByAggregateInput;

    @Field(() => UserPromotionMinOrderByAggregateInput, {nullable:true})
    _min?: UserPromotionMinOrderByAggregateInput;

    @Field(() => UserPromotionSumOrderByAggregateInput, {nullable:true})
    _sum?: UserPromotionSumOrderByAggregateInput;
}

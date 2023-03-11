import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { ListAdCountOrderByAggregateInput } from './list-ad-count-order-by-aggregate.input';
import { ListAdAvgOrderByAggregateInput } from './list-ad-avg-order-by-aggregate.input';
import { ListAdMaxOrderByAggregateInput } from './list-ad-max-order-by-aggregate.input';
import { ListAdMinOrderByAggregateInput } from './list-ad-min-order-by-aggregate.input';
import { ListAdSumOrderByAggregateInput } from './list-ad-sum-order-by-aggregate.input';

@InputType()
export class ListAdOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    list_id?: keyof typeof SortOrder;

    @Field(() => ListAdCountOrderByAggregateInput, {nullable:true})
    _count?: ListAdCountOrderByAggregateInput;

    @Field(() => ListAdAvgOrderByAggregateInput, {nullable:true})
    _avg?: ListAdAvgOrderByAggregateInput;

    @Field(() => ListAdMaxOrderByAggregateInput, {nullable:true})
    _max?: ListAdMaxOrderByAggregateInput;

    @Field(() => ListAdMinOrderByAggregateInput, {nullable:true})
    _min?: ListAdMinOrderByAggregateInput;

    @Field(() => ListAdSumOrderByAggregateInput, {nullable:true})
    _sum?: ListAdSumOrderByAggregateInput;
}

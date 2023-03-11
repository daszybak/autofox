import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ListCountOrderByAggregateInput } from './list-count-order-by-aggregate.input';
import { ListAvgOrderByAggregateInput } from './list-avg-order-by-aggregate.input';
import { ListMaxOrderByAggregateInput } from './list-max-order-by-aggregate.input';
import { ListMinOrderByAggregateInput } from './list-min-order-by-aggregate.input';
import { ListSumOrderByAggregateInput } from './list-sum-order-by-aggregate.input';

@InputType()
export class ListOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    list_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    list_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    search_params?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_notifiable_by_email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_notifiable_by_push?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_notifiable_by_sms?: keyof typeof SortOrder;

    @HideField()
    user_sub?: keyof typeof SortOrder;

    @Field(() => ListCountOrderByAggregateInput, {nullable:true})
    _count?: ListCountOrderByAggregateInput;

    @Field(() => ListAvgOrderByAggregateInput, {nullable:true})
    _avg?: ListAvgOrderByAggregateInput;

    @Field(() => ListMaxOrderByAggregateInput, {nullable:true})
    _max?: ListMaxOrderByAggregateInput;

    @Field(() => ListMinOrderByAggregateInput, {nullable:true})
    _min?: ListMinOrderByAggregateInput;

    @Field(() => ListSumOrderByAggregateInput, {nullable:true})
    _sum?: ListSumOrderByAggregateInput;
}

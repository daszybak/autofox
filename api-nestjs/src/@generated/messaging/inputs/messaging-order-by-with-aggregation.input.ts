import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { MessagingCountOrderByAggregateInput } from './messaging-count-order-by-aggregate.input';
import { MessagingAvgOrderByAggregateInput } from './messaging-avg-order-by-aggregate.input';
import { MessagingMaxOrderByAggregateInput } from './messaging-max-order-by-aggregate.input';
import { MessagingMinOrderByAggregateInput } from './messaging-min-order-by-aggregate.input';
import { MessagingSumOrderByAggregateInput } from './messaging-sum-order-by-aggregate.input';

@InputType()
export class MessagingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    messaging_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    platform?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_sub?: keyof typeof SortOrder;

    @Field(() => MessagingCountOrderByAggregateInput, {nullable:true})
    _count?: MessagingCountOrderByAggregateInput;

    @Field(() => MessagingAvgOrderByAggregateInput, {nullable:true})
    _avg?: MessagingAvgOrderByAggregateInput;

    @Field(() => MessagingMaxOrderByAggregateInput, {nullable:true})
    _max?: MessagingMaxOrderByAggregateInput;

    @Field(() => MessagingMinOrderByAggregateInput, {nullable:true})
    _min?: MessagingMinOrderByAggregateInput;

    @Field(() => MessagingSumOrderByAggregateInput, {nullable:true})
    _sum?: MessagingSumOrderByAggregateInput;
}

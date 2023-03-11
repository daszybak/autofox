import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { MessagingChannelCountOrderByAggregateInput } from './messaging-channel-count-order-by-aggregate.input';
import { MessagingChannelAvgOrderByAggregateInput } from './messaging-channel-avg-order-by-aggregate.input';
import { MessagingChannelMaxOrderByAggregateInput } from './messaging-channel-max-order-by-aggregate.input';
import { MessagingChannelMinOrderByAggregateInput } from './messaging-channel-min-order-by-aggregate.input';
import { MessagingChannelSumOrderByAggregateInput } from './messaging-channel-sum-order-by-aggregate.input';

@InputType()
export class MessagingChannelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    messaging_channel_id?: keyof typeof SortOrder;

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

    @Field(() => MessagingChannelCountOrderByAggregateInput, {nullable:true})
    _count?: MessagingChannelCountOrderByAggregateInput;

    @Field(() => MessagingChannelAvgOrderByAggregateInput, {nullable:true})
    _avg?: MessagingChannelAvgOrderByAggregateInput;

    @Field(() => MessagingChannelMaxOrderByAggregateInput, {nullable:true})
    _max?: MessagingChannelMaxOrderByAggregateInput;

    @Field(() => MessagingChannelMinOrderByAggregateInput, {nullable:true})
    _min?: MessagingChannelMinOrderByAggregateInput;

    @Field(() => MessagingChannelSumOrderByAggregateInput, {nullable:true})
    _sum?: MessagingChannelSumOrderByAggregateInput;
}

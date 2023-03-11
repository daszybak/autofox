import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';

@InputType()
export class MessagingChannelMaxOrderByAggregateInput {

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
}

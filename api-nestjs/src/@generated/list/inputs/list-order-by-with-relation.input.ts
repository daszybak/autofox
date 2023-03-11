import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../../user/inputs/user-order-by-with-relation.input';
import { ListAdOrderByRelationAggregateInput } from '../../list-ad/inputs/list-ad-order-by-relation-aggregate.input';

@InputType()
export class ListOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ListAdOrderByRelationAggregateInput, {nullable:true})
    ListAd?: ListAdOrderByRelationAggregateInput;
}

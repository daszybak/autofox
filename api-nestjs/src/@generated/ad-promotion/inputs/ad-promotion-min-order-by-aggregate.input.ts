import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';

@InputType()
export class AdPromotionMinOrderByAggregateInput {

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
}

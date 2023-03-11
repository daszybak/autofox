import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';

@InputType()
export class PromotionPlanMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validity_period?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    promotion_region_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_type?: keyof typeof SortOrder;
}

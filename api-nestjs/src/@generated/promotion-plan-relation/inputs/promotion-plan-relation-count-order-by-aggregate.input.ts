import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';

@InputType()
export class PromotionPlanRelationCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    parent_promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    child_promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reccurence?: keyof typeof SortOrder;
}
